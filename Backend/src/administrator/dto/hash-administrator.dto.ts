import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';
import { CreateAdministratorDto } from './create-administrator.dto';
export class HashedAdministratorDto extends PartialType(
  CreateAdministratorDto,
) {
  @IsString()
  @IsNotEmpty()
  @MinLength(60)
  @MaxLength(60)
  readonly password: string;
}
