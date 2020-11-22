import Schedule from "@useCases/Schedule/entities/Schedule";
import { IScheduleRepository } from "@useCases/Schedule/repositories/IScheduleRepository";
import { IUserRepository } from "@useCases/User/repositories/IUserRepository";
import IClassRepository from "../repositories/IClassRepository";

import {getCustomRepository} from 'typeorm'
import ClassRepository from "../repositories/ClassRepository";
import UserRepository from '../../User/repositories/UserRepository';
import ScheduleRepository from '@useCases/Schedule/repositories/ScheduleRespository'



interface RequestBody{
    name: string,
    avatar: string,
    whatsapp: string,
    bio: string,
    subject: string,
    cost: number,
    schedule: Schedule[] 
};

const userRepository = getCustomRepository(UserRepository);
// const classesRepository = new ClassRepository();
const scheduleRepository = getCustomRepository(ScheduleRepository);
const classesRepository = getCustomRepository(ClassRepository)
// const classe = ClassRepository.create({subject, cost, user_id})
// await classRepository.save(classe)

export default class CreateClassService{

    private userRepository: IUserRepository;
    private classesRepository: IClassRepository;
    private scheduleRepository: IScheduleRepository;

    constructor(
        classesRepository: IClassRepository,
        usersRepository: IUserRepository,
        scheduleRepository: IScheduleRepository
    ) {
        this.classesRepository = classesRepository;
        this.userRepository = usersRepository;
        this.scheduleRepository = scheduleRepository;
    }

    public async execute({
        name, avatar, whatsapp, bio, subject, cost, schedule 
    }: RequestBody){
        
        // Criando um Usuário
        const insertedUsersIds = await this.userRepository.create({ name, avatar, whatsapp, bio });
        const user_id = insertedUsersIds[0];


        // Criando uma Classe
        const insertedClassesIds = await this.classesRepository.create({ subject, cost, user_id });
        const class_id = insertedClassesIds[0];
        

        // // Tratando as informações - Regra de negócio
        const classSchedule = schedule.map((scheduleItem: Schedule) => {
            const from_f = Number(scheduleItem.from);
            const to_f = Number(scheduleItem.to);
            return this.scheduleRepository.create({
                class_id,
                week_day: scheduleItem.week_day,
                from: from_f,
                to: to_f});
        });

        return class_id;
    };
}