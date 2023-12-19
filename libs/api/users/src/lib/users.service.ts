import { Inject, Injectable } from '@nestjs/common';
import { PG_CONNECTION, Database, user } from '@vg/api-database';
import { eq } from 'drizzle-orm';
import { UpdateUserDto } from '../dtos/update-user.dto';
import { emit } from 'process';

@Injectable()
export class UsersService {
  constructor(@Inject(PG_CONNECTION) private conn: Database) {}

  async find() {
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
      .from(user);
    return res;
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

  async findOneByEmail(email: string) {
    const [res] = await this.conn
      .select()
      .from(user)
      .where(eq(user.email, email));
    return res;
  }

  async update(userId: number, updateUserDto: UpdateUserDto) {
    const res = await this.conn
      .update(user)
      .set(updateUserDto)
      .where(eq(user.userId, userId))
      .returning({
        name: user.name,
        email: user.email,
        address: user.address,
        phone: user.phone,
        taxId: user.taxId,
        isAdmin: user.isAdmin,
        createdAt: user.createdAt,
        userId: user.userId,
      });
    return res[0];
  }

  async delete(userId: number) {
    await this.conn.delete(user).where(eq(user.userId, userId));
  }
}
