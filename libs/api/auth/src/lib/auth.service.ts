import { BadRequestException, Inject, Injectable } from '@nestjs/common';
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
      const [res] = await this.conn.insert(user).values(newUser).returning();
      if (!res) {
        throw 'Register Failed';
      }

      const jwt = await this.jwtService.signAsync({ userId: res.userId });

      return { jwt };
    } catch (err) {
      throw new BadRequestException();
    }
  }
  async login(loginDto: LoginDto) {
    try {
      const user = await this.userService.findOneByEmail(loginDto.email);
      if (!user) {
        throw new Error(LOGIN_FAIL);
      }

      const hash = await this.#getUserHash(user.userId);

      if (!hash) {
        throw new Error(LOGIN_FAIL);
      }

      const matches = this.checkPassword(loginDto.password, hash);
      if (!matches) {
        console.group('Not match');
        throw new Error(LOGIN_FAIL);
      }

      const jwt = await this.jwtService.signAsync({ userId: user.userId });
      if (!jwt) {
        throw new Error(LOGIN_FAIL);
      }
      return { jwt };
    } catch (err) {
      return new BadRequestException(err);
    }
  }

  async assignAdmin(assignAdminDto: AssignAdminDto) {
    try {
      const res = await this.conn
        .update(user)
        .set(assignAdminDto)
        .where(eq(user.userId, assignAdminDto.userId))
        .returning({ isAdmin: user.isAdmin });
      return res;
    } catch (err) {
      throw new BadRequestException();
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
