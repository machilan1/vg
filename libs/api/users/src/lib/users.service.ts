import { Inject, Injectable } from '@nestjs/common';
import { PG_CONNECTION, Database, user } from '@vg/api-database';
import { eq } from 'drizzle-orm';

@Injectable()
export class UsersService {
  constructor(@Inject(PG_CONNECTION) private conn: Database) {}

  find() {
    return this.conn
      .select({
        name: user.name,
        email: user.email,
        address: user.address,
        phone: user.phone,
        taxId: user.taxId,
        isAdmin: user.isAdmin,
        createdAt: user.createdAt,
        userId: user.userId,
      })
      .from(user);
  }

  async findOne(userId: number) {
    const res = await this.conn
      .select({
        name: user.name,
        email: user.email,
        address: user.address,
        phone: user.phone,
        taxId: user.taxId,
        isAdmin: user.isAdmin,
        createdAt: user.createdAt,
        userId: user.userId,
      })
      .from(user)
      .where(eq(user.userId, userId));

    return res[0];
  }
  update() {}
  delete() {}
}
