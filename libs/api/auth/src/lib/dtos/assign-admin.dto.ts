import { IsBoolean, IsNotEmpty, IsPositive } from 'class-validator';

export class AssignAdminDto {
  @IsPositive()
  userId!: number;

  @IsNotEmpty()
  @IsBoolean()
  isAdmin!: boolean;
}
