import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsOptional,
  Validate,
} from 'class-validator';
import { Status } from 'src/statuses/entities/status.entity';
import { FileEntity } from 'src/files/entities/file.entity';
import { IsExist } from 'src/utils/validators/is-exists.validator';
import { User } from 'src/users/entities/user.entity';

export class CreateStoreDto {

  @ApiProperty({ example: 'John' })
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: 'Paris' })
  @IsNotEmpty()
  city: string;

  @ApiProperty({ example: '00001' })
  @IsNotEmpty()
  zip_code: string;

  @ApiProperty({ example: 'Street # 2, Paris, France' })
  @IsNotEmpty()
  address: string;

  @ApiProperty({ example: '+33 0987688993' })
  @IsNotEmpty()
  phone_number: string;

  @ApiProperty({ type: () => FileEntity })
  @IsOptional()
  @Validate(IsExist, ['FileEntity', 'id'], {
    message: 'imageNotExists',
  })
  photo?: FileEntity | null;

  @ApiProperty({ type: User })
  @Validate(IsExist, ['User', 'id'], {
    message: 'userNotExists',
  })
  user?: User | null;

  @ApiProperty({ type: Status })
  @Validate(IsExist, ['Status', 'id'], {
    message: 'statusNotExists',
  })
  status?: Status;

}
