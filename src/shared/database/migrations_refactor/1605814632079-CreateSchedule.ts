import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateSchedule1605814632079 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"')
        await queryRunner.createTable(
        new Table({
            name:'schedule',
            columns:[
                {
                    name:'id',
                    type: 'varchar',
                    isPrimary: true,
                    generationStrategy:'uuid',
                    default: 'uuid_generate_v4()',
                },
                {
                    name:'week_day',
                    type: 'integer',
                    isNullable: false,
                },
                {
                    name:'from',
                    type: 'integer',
                    isNullable: false,
                },
                {
                    name:'to',
                    type: 'integer',
                    isNullable: false,
                }],
            foreignKeys:[{
                columnNames:['classes_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'classes',
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
            }]
        }))
        
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('schedule');
    }

}
