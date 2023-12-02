import { MigrationInterface, QueryRunner } from "typeorm"

export class UpdateUserAndStoreTable1701531420730 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
        ALTER TABLE "public"."user"
        ADD COLUMN phone_number character varying;`)
        await queryRunner.query(`ALTER TABLE "public"."store" ADD COLUMN "photoId" UUID;  `);
        
        await queryRunner.query(`ALTER TABLE "public"."store"
        DROP COLUMN photo;
        `);
        await queryRunner.query(`
        ALTER TABLE "public"."store"
        ADD CONSTRAINT fk_store_photo FOREIGN KEY ("photoId") REFERENCES "file"("id");`)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
