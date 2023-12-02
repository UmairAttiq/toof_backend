import { ApiProperty } from '@nestjs/swagger';
import { Role } from '../../roles/entities/role.entity';
import {
  IsNumber,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { Transform, Type, plainToInstance } from 'class-transformer';
import { Store } from '../entities/store.entity';
import { User } from 'src/users/entities/user.entity';

export class FilterStoreDto {
  @ApiProperty({ type: User })
  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => User)
  users?: User[] | null;
}

export class SortStoreDto {
  @ApiProperty()
  @IsString()
  orderBy: keyof Store;

  @ApiProperty()
  @IsString()
  order: string;
}

export class QueryStoreDto {
  @ApiProperty({
    required: false,
  })
  @Transform(({ value }) => (value ? Number(value) : 1))
  @IsNumber()
  @IsOptional()
  page: number;

  @ApiProperty({
    required: false,
  })
  @Transform(({ value }) => (value ? Number(value) : 10))
  @IsNumber()
  @IsOptional()
  limit: number;

  @ApiProperty({ type: String, required: false })
  @IsOptional()
  @Transform(({ value }) =>
    value ? plainToInstance(FilterStoreDto, JSON.parse(value)) : undefined,
  )
  @ValidateNested()
  @Type(() => FilterStoreDto)
  filters?: FilterStoreDto | null;

  @ApiProperty({ type: String, required: false })
  @IsOptional()
  @Transform(({ value }) => {
    return value ? plainToInstance(SortStoreDto, JSON.parse(value)) : undefined;
  })
  @ValidateNested({ each: true })
  @Type(() => SortStoreDto)
  sort?: SortStoreDto[] | null;
}
