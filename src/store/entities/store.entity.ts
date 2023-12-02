import {
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    Entity,
    ManyToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
  } from 'typeorm';
  import { Status } from '../../statuses/entities/status.entity';
  import { FileEntity } from '../../files/entities/file.entity';
  import { EntityHelper } from 'src/utils/entity-helper';
import { User } from 'src/users/entities/user.entity';

  
  @Entity()
  export class Store extends EntityHelper {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: String, nullable: false })
    name: string;
  
    @Column({ type: String, nullable: false })
    address: string;

    @Column({ type: String, nullable: false })
    city: string;

    @Column({ type: String, nullable: false })
    zip_code: string;

    @Column({ type: String, nullable: false })
    phone_number: string;
  
    @ManyToOne(() => FileEntity, {
      eager: true,
    })
    photo?: FileEntity | null;
  
    @ManyToOne(() => User, {
      eager: true,
    })
    user?: User | null;

    @ManyToOne(() => Status, {
      eager: true,
    })
    status?: Status;
  
    @CreateDateColumn()
    createdAt: Date;
  
    @UpdateDateColumn()
    updatedAt: Date;
  
    @DeleteDateColumn()
    deletedAt: Date;
  }
  