import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
  Inject,
  InternalServerErrorException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PG_CONNECTION, user } from '@vg/api-database';
import { Request } from 'express';
import { Database } from '@vg/api-database';
import { eq } from 'drizzle-orm';

@Injectable()
export class AdminGuard implements CanActivate {
  constructor(
    private jwtService: JwtService,
    @Inject(PG_CONNECTION) private conn: Database,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const token = this.extractTokenFromHeader(request);
    if (!token) {
      console.log('AdminGuard', 'no token');
      throw new UnauthorizedException();
    }
    try {
      const payload = await this.jwtService.verifyAsync(token, {
        secret: process.env['JWT_SECRET'],
      });
      console.log('AdminGuard');
      console.log(request['user']);
      console.log(payload);

      const res = await this.conn.query.user.findFirst({
        where: eq(user.userId, request['user'].userId),
        columns: { isAdmin: true },
      });

      console.log(res);
      if (!res) {
        console.log('AdminGuard', 'no res');
        throw new UnauthorizedException();
      }
      if (!res.isAdmin) {
        console.log('AdminGuard', 'Not admin');
        throw new UnauthorizedException();
      }
    } catch (err) {
      throw new InternalServerErrorException();
    }
    return true;
  }

  private extractTokenFromHeader(request: Request): string | undefined {
    const [type, token] = request.headers.authorization?.split(' ') ?? [];
    return type === 'Bearer' ? token : undefined;
  }
}
