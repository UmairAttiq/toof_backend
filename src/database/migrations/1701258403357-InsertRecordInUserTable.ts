import { MigrationInterface, QueryRunner } from "typeorm"

export class InsertRecordInUserTable1701258403357 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `INSERT INTO "user"("email", "password", "provider", "socialId", "firstName", "lastName", "createdAt", "updatedAt", "deletedAt", "photoId", "roleId", "statusId")
            VALUES ('test3@example.com', '$2a$10$ZpfvAJZ.Du01vd9DOOd1Te/sTKDfdiXAmFvz3UrBMpkaoHep5YBju', DEFAULT, DEFAULT, 'umair', 'attiq', DEFAULT, DEFAULT, DEFAULT, DEFAULT, 2, 2);`,
          );
        
    }

    public async down(_queryRunner: QueryRunner): Promise<void> {
    }

}
