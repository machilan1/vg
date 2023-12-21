import {
  BadRequestException,
  ConflictException,
  Inject,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { Database, PG_CONNECTION, user } from '@vg/api-database';
import { RegisterDto } from './dtos/register.dto';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import * as bcrypt from 'bcrypt';
import { LoginDto } from './dtos/login.dto';
import { LOGIN_FAIL } from '@vg/shared-constants';
import { eq } from 'drizzle-orm';
import { UsersService } from '@vg/api-users';
import { AssignAdminDto } from './dtos/assign-admin.dto';
import { PostgresError } from 'postgres';

@Injectable()
export class AuthService {
  constructor(
    @Inject(PG_CONNECTION) private conn: Database,
    private jwtService: JwtService,
    private configService: ConfigService,
    private userService: UsersService,
  ) {}

  async register(registerDto: RegisterDto) {
    const secret = this.encrypt(registerDto.password);
    const newUser = { ...registerDto, password: secret };

    try {
      const [res] = await this.conn
        .insert(user)
        .values(newUser)
        .returning({ userId: user.userId });

      if (!res) {
        throw new ConflictException();
      }

      const jwt = await this.jwtService.signAsync({ userId: res.userId });

      return { jwt };
    } catch (err) {
      console.log(err);
      if (err instanceof PostgresError) {
        if (err.code === '23505') {
          throw new ConflictException(
            'Please use a different value for Tax ID or email',
          );
        }
      }
      throw new InternalServerErrorException();
    }
  }
  async login(loginDto: LoginDto) {
    try {
      const user = await this.userService.findOneByEmail(loginDto.email);
      if (!user) {
        throw new ConflictException(LOGIN_FAIL);
      }

      const hash = await this.#getUserHash(user.userId);

      if (!hash) {
        throw new ConflictException(LOGIN_FAIL);
      }

      const matches = this.checkPassword(loginDto.password, hash);
      if (!matches) {
        console.group('Not match');
        throw new ConflictException(LOGIN_FAIL);
      }

      const jwt = await this.jwtService.signAsync({ userId: user.userId });
      if (!jwt) {
        throw new ConflictException(LOGIN_FAIL);
      }
      return { jwt };
    } catch (err) {
      if (err instanceof ConflictException) {
        if (err.getStatus() === 409) {
          throw err;
        }
      }

      throw new InternalServerErrorException();
    }
  }

  async assignAdmin(assignAdminDto: AssignAdminDto) {
    try {
      const res = await this.conn
        .update(user)
        .set(assignAdminDto)
        .where(eq(user.userId, assignAdminDto.userId))
        .returning({ isAdmin: user.isAdmin });

      if (res.length === 0) {
        throw new NotFoundException();
      }

      return res;
    } catch (err) {
      console.log(err);
      if (err instanceof NotFoundException) {
        throw err;
      }

      throw new ConflictException();
    }
  }

  // utilities

  // Get user hash by id
  async #getUserHash(userId: number) {
    const secret = await this.conn
      .select({ secret: user.password })
      .from(user)
      .where(eq(user.userId, userId))
      .limit(1);

    return secret[0].secret;
  }

  private encrypt(password: string) {
    const hash = bcrypt.hashSync(
      password,
      +this.configService.get('SALT_ROUND') ?? 12,
    );
    return hash;
  }

  private checkPassword(secret: string, hash: string): boolean {
    const res = bcrypt.compareSync(secret, hash);
    return res;
  }
}
