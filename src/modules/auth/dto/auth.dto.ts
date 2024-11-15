import {
  IsEmail,
  IsStrongPassword,
  MaxLength,
  MinLength,
} from 'class-validator';

class signupDto {
  @MaxLength(20)
  @MinLength(3)
  name: string;
  @IsEmail()
  email: string;
  @IsStrongPassword()
  password: string;
}
class signinDto {
  @IsEmail()
  email: string;
  @IsStrongPassword()
  password: string;
}
export { signupDto, signinDto };
