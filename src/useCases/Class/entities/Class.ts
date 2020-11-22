import {Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, OneToMany} from 'typeorm'
import User from "@useCases/User/entities/User";
import Schedule from '@useCases/Schedule/entities/Schedule';

@Entity('classes')
export default class Class{
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    subject: string;

    @Column()
    cost: string;

    @Column()
    user_id: string;

    @ManyToOne(() => User, user => user.class)
    @JoinColumn({name:'user_id'})
    user: User;

    @OneToMany(() => Schedule, schedule => schedule.classe)
    schedule: Schedule[];

    
}