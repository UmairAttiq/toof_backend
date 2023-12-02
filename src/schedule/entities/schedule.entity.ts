import {
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    Entity,
    ManyToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
  } from 'typeorm';
  import { EntityHelper } from 'src/utils/entity-helper';
import { User } from 'src/users/entities/user.entity';
import { Store } from 'src/store/entities/store.entity';

  
  @Entity()
  export class Schedule extends EntityHelper {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: String, nullable: false })
    day: string;
  
    @Column({ type: String, nullable: false })
    time_slot: string;
  
    @ManyToOne(() => User, {
      eager: true,
    })
    user?: User | null;

    @ManyToOne(() => Store, {
      eager: true,
    })
    store?: Store;
  
    @CreateDateColumn()
    createdAt: Date;
  
    @UpdateDateColumn()
    updatedAt: Date;
  
    @DeleteDateColumn()
    deletedAt: Date;
  }
  