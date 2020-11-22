import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateClasses1605805798056 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"')
        await queryRunner.createTable(
        new Table({
            name:'classes',
            columns:[
                {
                    name:'id',
                    type: 'varchar',
                    isPrimary: true,
                    generationStrategy:'uuid',
                    default: 'uuid_generate_v4()',
                },
                {
                    name:'subject',
                    type: 'varchar',
                    isNullable: false,
                },
                {
                    name:'cost',
                    type: 'varchar',
                    isNullable: false,
                }],
                foreignKeys:[{
                    columnNames:['user_id'],
                    referencedColumnNames: ['id'],
                    referencedTableName: 'users',
                    onDelete: 'CASCADE',
                    onUpdate: 'CASCADE',
                    }]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('classes');
    }

}
