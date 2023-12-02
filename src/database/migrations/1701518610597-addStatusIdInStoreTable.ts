import { MigrationInterface, QueryRunner } from "typeorm"

export class AddStatusIdInStoreTable1701518610597 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
        ALTER TABLE store
        ADD COLUMN statusId INTEGER;`)
        await queryRunner.query(`
        ALTER TABLE store
        ADD CONSTRAINT fk_store_status FOREIGN KEY (statusId) REFERENCES status(id);`)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
