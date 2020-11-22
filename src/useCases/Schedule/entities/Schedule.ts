import {Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn} from 'typeorm'
import Class from '@useCases/Class/entities/Class';

@Entity('schedule')
export default class Schedule{
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    week_day: number;

    @Column()
    from: number;

    @Column()
    to: number;

    @ManyToOne(() => Class, classe => classe.schedule)
    @JoinColumn({name: 'classes_id'})
    classe: Class;

}