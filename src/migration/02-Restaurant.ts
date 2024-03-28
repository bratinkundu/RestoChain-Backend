import { MigrationInterface, QueryRunner } from "typeorm";

export class RestaurantMigration20240227082235 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE "restaurants" (
                "id" uuid NOT NULL, 
                "name" character varying NOT NULL, 
                "address" character varying NOT NULL, 
                "userId" uuid, 
                CONSTRAINT "PK_649e250d8b8165cb406d99aa30f" PRIMARY KEY ("id"))
        `)

        await queryRunner.query(`
            ALTER TABLE "restaurants"
            ADD CONSTRAINT "FK_425e451974d2c2eb39e8f3d39c0" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("restaurants")
    }

}
