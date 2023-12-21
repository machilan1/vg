import { IsNotEmpty, IsPositive } from 'class-validator';

export class AssignAdminDto {
  @IsPositive()
  userId!: number;

  @IsNotEmpty()
  isAdmin!: boolean;
}
