import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, HttpCode, HttpStatus, Query } from '@nestjs/common';
import { StoreService } from './store.service';
import { CreateStoreDto } from './dto/create-store.dto';
import { UpdateStoreDto } from './dto/update-store.dto';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Roles } from 'src/roles/roles.decorator';
import { RoleEnum } from 'src/roles/roles.enum';
import { RolesGuard } from 'src/roles/roles.guard';
import { FilterStoreDto } from './dto/query-store.dto';
import { User } from 'src/users/entities/user.entity';

// @ApiBearerAuth()
// @Roles(RoleEnum.user)
// @UseGuards(AuthGuard('jwt'), RolesGuard)
@ApiTags('Store')
@Controller({
  path: 'store',
  version: '1',
})
export class StoreController {
  constructor(private readonly storeService: StoreService) {}

  @Post()
  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  @HttpCode(HttpStatus.CREATED)
  create(@Body() createStoreDto: CreateStoreDto) {
    return this.storeService.create(createStoreDto);
  }

  @Get()
  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  @HttpCode(HttpStatus.OK)
  findAll() {
    return this.storeService.findAll();
  }

  @Get(':id')
  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  @HttpCode(HttpStatus.OK)
  findOne(@Param('id') id: string) {
    return this.storeService.findOne(+id);
  }

  @Patch(':id')
  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  @HttpCode(HttpStatus.OK)
  update(@Param('id') id: string, @Body() updateStoreDto: UpdateStoreDto) {
    return this.storeService.update(+id, updateStoreDto);
  }

  @Delete(':id')
  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  @HttpCode(HttpStatus.OK)
  remove(@Param('id') id: string) {
    return this.storeService.remove(+id);
  }

  @Patch('getAllStores')
  @HttpCode(HttpStatus.OK)
  findAllUserStores(@Query() query: FilterStoreDto) {
    return this.storeService.findAllUserStores(query);
  }

  @Post('addStore')
  @HttpCode(HttpStatus.CREATED)
  addStore(@Body() createStoreDto: CreateStoreDto):Promise<User> {
    return this.storeService.addStore(createStoreDto);
  }
  
}
