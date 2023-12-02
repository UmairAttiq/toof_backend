import { PartialType,ApiProperty } from '@nestjs/swagger';
import { CreatePackageDto } from './create-package.dto';
import {
    IsNotEmpty,
    IsOptional,
  } from 'class-validator';

export class UpdatePackageDto extends PartialType(CreatePackageDto) {
  @ApiProperty()
  @IsNotEmpty()
  price?: number;

  @ApiProperty()
  @IsOptional()
  discount?: number | null;

  @ApiProperty({ example: 'package1' })
  @IsNotEmpty()
  name?: string;

  @ApiProperty({ example: 'package description' })
  @IsNotEmpty()
  description?: string;

  @ApiProperty()
  @IsOptional()
  points?: string | null;
}
