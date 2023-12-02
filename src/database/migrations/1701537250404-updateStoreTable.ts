import { MigrationInterface, QueryRunner } from "typeorm"

export class UpdateStoreTable1701537250404 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
        ALTER TABLE "public"."store"
RENAME COLUMN "statusid" TO "statusId";
;`)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
