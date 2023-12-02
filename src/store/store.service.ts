import { Injectable } from '@nestjs/common';
import { CreateStoreDto } from './dto/create-store.dto';
import { UpdateStoreDto } from './dto/update-store.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Store } from './entities/store.entity';
import { FindOptionsWhere, Repository } from 'typeorm';
import { FilterStoreDto } from './dto/query-store.dto';
import { User } from 'src/users/entities/user.entity';
import { UserProfileStatusEnum } from 'src/users/enums/user.enum';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class StoreService {
  constructor(
    @InjectRepository(Store)
    private storeRepository: Repository<Store>,
    private usersService: UsersService,
  ) {}
  create(createStoreDto: CreateStoreDto) {
    return this.storeRepository.save(
      this.storeRepository.create(createStoreDto),
    );
  }

  findAll() {
    return this.storeRepository.find();
  }

  findAllUserStores(filterOptions: FilterStoreDto) : Promise<Store[]>{
    const where: FindOptionsWhere<Store> = {};
    if (filterOptions?.users?.length) {
      where.user = filterOptions.users.map((user) => ({
        id: user.id,
      }));
    }

    return this.storeRepository.find({
      where: where
    });

  }

  findOne(id: number) {
    return this.storeRepository.findOne({where:{id:id}})
  }

  update(id: number, updateStoreDto: UpdateStoreDto) {
    return this.storeRepository.save(
      this.storeRepository.create({
        id,
        ...updateStoreDto,
      }),
    );
  }

  remove(id: number) {
    return this.storeRepository.delete(id)
  }

  async addStore(createStoreDto: CreateStoreDto):Promise<User> {
    const result =await this.storeRepository.save(
      this.storeRepository.create(createStoreDto),
    );
    console.log("result", result)
    return this.usersService.update(
      result.user?.id as number,
      {profile_status: UserProfileStatusEnum.ADD_STORE}
    );
  }
}
