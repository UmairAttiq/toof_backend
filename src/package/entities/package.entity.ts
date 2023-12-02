import {
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
  } from 'typeorm';
  import { EntityHelper } from 'src/utils/entity-helper';
  import { IsNumber } from 'class-validator';
  @Entity()
  export class Package extends EntityHelper {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column({ type: String, nullable: false })
    name: string ;
  
    @Column({ type: String, nullable: false })
    description: string ;

    @Column({ type: String, nullable: true })
    points: string | null;

    @Column({ type: String, nullable: false })
    @IsNumber()
    price: number ;

    @Column({ type: String, nullable: true })
    @IsNumber()
    descount: number | null ;
  
    @CreateDateColumn()
    createdAt: Date;
  
    @UpdateDateColumn()
    updatedAt: Date;
  
    @DeleteDateColumn()
    deletedAt: Date;
  }
  