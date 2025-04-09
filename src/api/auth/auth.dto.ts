import { IsEmail, IsString, IsStrongPassword, IsUrl, Matches, MinLength } from "class-validator";

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
    // @Matches(
    //     new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$'),
    //     {
    //         message: 'password must contain at lest 1 uppercase letter, 1 lowercase letter, 1 number and 1 special character'
    //     }
    // )
    @IsStrongPassword({
        minLength: 8
    })
    password: string;
}