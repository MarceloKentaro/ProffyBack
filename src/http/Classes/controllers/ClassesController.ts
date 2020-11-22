import { Request, Response } from 'express';
import db from '@database/connection';
import ListClassService from '@useCases/Class/services/ListClassService';
import CreateClassService from '@useCases/Class/services/CreateClassService';
import ClassRepository from '@useCases/Class/repositories/ClassRepository';
import UserRepository from '@useCases/User/repositories/UserRepository';
import ScheduleRepository from '@useCases/Schedule/repositories/ScheduleRespository';
import { getCustomRepository } from 'typeorm';



// Tratamento ded request e Response
// Mexer no db
// Tem a regras de negocio
// Trata os erros


export default class ClassesController {

	async index(request: Request, response: Response): Promise<Response> {
		const filters = request.query;

		const subject = filters.subject as string;
        const week_day = filters.week_day as string;
        const time = filters.time as string;		
		//Chamar Service de lista de classe

		try{

			const classesRepository = getCustomRepository(ClassRepository);

			const listClasses = new ListClassService(classesRepository);
			const classes = await listClasses.execute({
				week_day,
				subject,
				time
			});

			// chamar service da lista de classe
			return response.json(classes);

		} catch(err){
			return response.send(400).json({
				error: err.message,
			});
		}
	};

	async create(request: Request, response: Response): Promise<Response> {
		const { name, avatar, whatsapp, bio, subject, cost, schedule } = request.body;

		try {
			const classesRepository = getCustomRepository(ClassRepository);
			const userRepository = getCustomRepository(UserRepository);
			const scheduleRepository = getCustomRepository(ScheduleRepository);

			//Chamar service de criação de class
			const createClass = new CreateClassService(
				classesRepository,
				userRepository,
				scheduleRepository
			);
			const class_id = await createClass.execute(
				{name, avatar, whatsapp, bio, subject, cost, schedule }
			);
			
			return response.status(201).send();
		} catch (error) {
			// await db.rollback();
			return response.status(400).json({
				error: 'Unexpected error while creating new class',
			});
		}
	}


}
