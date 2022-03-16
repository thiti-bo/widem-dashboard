import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateDashboardDto {
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;

  value:string;
}
