import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsOptional,
  Validate,
} from 'class-validator';
import { IsExist } from 'src/utils/validators/is-exists.validator';
import { User } from 'src/users/entities/user.entity';
import { Store } from 'src/store/entities/store.entity';

export class CreateScheduleDto {

  @ApiProperty({ example: 'John' })
  @IsNotEmpty()
  day: string;

  @ApiProperty({ example: 'Paris' })
  @IsNotEmpty()
  time_slot: string;

  @ApiProperty({ type: User })
  @Validate(IsExist, ['User', 'id'], {
    message: 'userNotExists',
  })
  user?: User | null;

  @ApiProperty({ type: Store })
  @Validate(IsExist, ['Store', 'id'], {
    message: 'storeNotExists',
  })
  store?: Store | null;

}
