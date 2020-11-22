import {EntityRepository, Repository} from 'typeorm'
import Class from '../entities/Class';
import IClassRepository from './IClassRepository';



@EntityRepository(Class)
export default class ClassRepository extends Repository<Class> implements IClassRepository{

    public async filterBySchedule(timeInMinutes: number): Promise<Class[] | null>{
        const searchedClass = await this.find({
            where: {timeInMinutes},
            relations:['user'],
            join: {alias: 'user_id'},
        })
        return searchedClass || null;
    }


    public async filterByWeekday(week_day: string): Promise<Class[] | null>{
        const searchedClass = await this.find({
            where: {week_day},
            join: {alias: 'user_id'},
            relations:['user'],
        })
        return searchedClass || null;
    }

    public async findBySubject (subject: string): Promise<Class[] | null>{
        const searchedClass = await this.find({
            where:{subject},
            relations:['user'],
            join: {alias: 'user_id'}
        })
        return searchedClass|| null;
    }

}











// public async filterBySchedule(timeInMinutes: number): Promise<Class[]>{
//     const classes = await db('classes')
//     .whereExists(function () {
//         this.select('class_schedule.*')
//             .from('class_schedule')
//             .whereRaw('`class_schedule`.`class_id` = `classes`.`id`')
//             .whereRaw('`class_schedule`.`from` <= ??', [timeInMinutes])
//             .whereRaw('`class_schedule`.`to` > ??', [timeInMinutes]);
//     })
//     .join('users', 'classes.user_id', '=', 'users.id')
//     .select(['classes.*', 'users.*']);

// return classes;








// export  class ClassRepository implements IClassRepository{
//     create(arg0: { subject: string; cost: number; user_id: any; }) {
//         throw new Error("Method not implemented.");
//     }
//     public async filterByWeekday(week_day: string): Promise<any>{
//         const classes = await db('classes')
// 		.whereExists(function () {
// 			this.select('class_schedule.*')
// 				.from('class_schedule')
// 				.whereRaw('`class_schedule`.`class_id` = `classes`.`id`')
// 				.whereRaw('`class_schedule`.`week_day` = ??', [Number(week_day)])
// 		})
// 		.join('users', 'classes.user_id', '=', 'users.id')
// 		.select(['classes.*', 'users.*']);
//     };

//     public async filterBySchedule(timeInMinutes: number): Promise<Class[]>{
//         const classes = await db('classes')
//         .whereExists(function () {
//             this.select('class_schedule.*')
//                 .from('class_schedule')
//                 .whereRaw('`class_schedule`.`class_id` = `classes`.`id`')
//                 .whereRaw('`class_schedule`.`from` <= ??', [timeInMinutes])
//                 .whereRaw('`class_schedule`.`to` > ??', [timeInMinutes]);
//         })
//         .join('users', 'classes.user_id', '=', 'users.id')
//         .select(['classes.*', 'users.*']);

//     return classes;
//     };

//     public async filterBySubject(subject: string): Promise<any>{
//         const classes = await db('classes')
//             .where('classes.subject', '=', subject)
//             .join('users', 'classes.user_id', '=', 'users.id')
//             .select(['classes.*', 'users.*']);
//         return classes;
//     };


// } 

