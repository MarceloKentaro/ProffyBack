import Class from '@useCases/Class/entities/Class';
import Connection from '@useCases/Connection/entities/Connection'
import {Entity, Column, PrimaryGeneratedColumn, OneToMany} from 'typeorm'

@Entity('users')
export default class User{
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column()
    avatar: string;

    @Column()
    whatsapp: string;

    @Column()
    bio: string;

    @OneToMany(() => Class, classes => classes.user)
    class: Class[];

    @OneToMany(() => Connection, connection => connection.user)
    connections: Connection[];


}