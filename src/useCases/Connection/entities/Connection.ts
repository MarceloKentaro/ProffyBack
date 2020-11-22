import {Entity, Column, PrimaryGeneratedColumn, JoinColumn, CreateDateColumn, ManyToOne} from 'typeorm'
import User from "@useCases/User/entities/User";

@Entity('connections')
export default class Connection{
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ManyToOne( () => User, user => user.connections)
    @JoinColumn({name:'user_id'})
    user: User;

    @CreateDateColumn({type: "timestamp"})
    creat_at: Date;

    @Column()
    user_id: number;

}