import { Injectable } from '@nestjs/common';
import { CreatePackageDto } from './dto/create-package.dto';
import { UpdatePackageDto } from './dto/update-package.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Package } from './entities/package.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PackageService {
  constructor(
    @InjectRepository(Package)
    private packagesRepository: Repository<Package>,
  ) {}
  create(createPackageDto: CreatePackageDto) {
    return this.packagesRepository.save(
      this.packagesRepository.create(createPackageDto),
    );
  }

  findAll() {
    return this.packagesRepository.find();
  }

  findOne(id: number) {
    return this.packagesRepository.findOne({where:{id:id}})
  }

  update(id: number, updatePackageDto: UpdatePackageDto) {
    return this.packagesRepository.save(
      this.packagesRepository.create({
        id,
        ...updatePackageDto,
      }),
    );
  }

  remove(id: number) {
    return this.packagesRepository.delete(id)
  }
}
