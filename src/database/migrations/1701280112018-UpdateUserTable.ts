import { MigrationInterface, QueryRunner } from "typeorm"

export class UpdateUserTable1701280112018 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD COLUMN profile_status INTEGER;`)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
