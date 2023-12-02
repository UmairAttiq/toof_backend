import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateScheduleDto } from './create-schedule.dto';
import { IsNotEmpty } from 'class-validator';

export class UpdateScheduleDto extends PartialType(CreateScheduleDto) {
    @ApiProperty({ example: 'John' })
    @IsNotEmpty()
    day?: string;
  
    @ApiProperty({ example: 'Paris' })
    @IsNotEmpty()
    time_slot?: string;
  
}
