import { IsEmail, IsString, IsUrl, MinLength } from "class-validator";

export class AddUserDTO {
    @IsString()
    firstName: string;

    @IsString()
    lastName: string;

    @IsUrl()
    picture: string;

    @IsEmail()
    username: string;

    @IsString()
    @MinLength(8)
    password: string;
}