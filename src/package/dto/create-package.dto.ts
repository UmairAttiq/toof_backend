import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsOptional,
} from 'class-validator';

export class CreatePackageDto {

  @ApiProperty()
  @IsNotEmpty()
  price: number;

  @ApiProperty({ example: 'Doe' })
  @IsOptional()
  discount: number | null;

  @ApiProperty({ example: 'package1' })
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: 'package description' })
  @IsNotEmpty()
  description: string;

  @ApiProperty({ example: 'Doe' })
  @IsOptional()
  points: string | null;

}
