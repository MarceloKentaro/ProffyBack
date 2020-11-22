import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateConnections1605814611086 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"')
        await queryRunner.createTable(
        new Table({
            name:'connections',
            columns:[
                {
                    name:'id',
                    type: 'varchar',
                    isPrimary: true,
                    generationStrategy:'uuid',
                    default: 'uuid_generate_v4()',
                },
                {
                    name:'created_at',
                    type: 'timestamp',
                    isPrimary: true,
                    default:'now()',
                }
            ],
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
        await queryRunner.dropTable('connections');
    }

}
