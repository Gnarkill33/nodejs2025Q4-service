import { IsString, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty({ message: 'Required fields are missing' })
  login: string;

  @IsString()
  @IsNotEmpty({ message: 'Required fields are missing' })
  password: string;
}
