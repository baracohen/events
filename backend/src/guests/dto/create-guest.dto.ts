import { IsNotEmpty, IsString } from "class-validator";

export class CreateGuestDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  mobileNumber: string;

  @IsNotEmpty()
  @IsString()
  side: string;

  @IsString()
  status: string;
}
