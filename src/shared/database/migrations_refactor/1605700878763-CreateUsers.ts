import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUsers1605700878763 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"')
        await queryRunner.createTable(
        new Table({
            name:'users',
            columns:[
                {
                    name:'id',
                    type: 'varchar',
                    isPrimary: true,
                    generationStrategy:'uuid',
                    default: 'uuid_generate_v4()',
                },
                {
                    name:'name',
                    type: 'varchar',
                    isNullable: false,
                },
                {
                    name:'avatar',
                    type: 'varchar',
                    isNullable: false,
                },
                {
                    name:'whatsapp',
                    type: 'varchar',
                    isNullable: false,
                },
                {
                    name:'bio',
                    type: 'varchar',
                    isNullable: false,
                },
            ]
        })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('users');
    }

}
