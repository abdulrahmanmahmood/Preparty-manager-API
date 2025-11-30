import { IsEmail, IsOptional, IsString, IsUrl, Matches } from 'class-validator';

export class CreateUserDto {
  @IsString()
  firstName: string;
  @IsString()
  lastName: string;
  @IsString()
  @IsEmail()
  email: string;
  @IsString()
  @IsUrl()
  @IsOptional()
  avatarUrl: string;
  @IsString()
  @Matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, {
    message:
      'Password must be at least 8 characters long and contain at least one letter and one number',
  })
  password: string;
}
