import Schedule from "../entities/Schedule";

import {EntityRepository, Repository} from 'typeorm'

@EntityRepository(Schedule)
export default class ScheduleRepository extends Repository<Schedule>{
    public async findByData (week_day: string): Promise<Schedule | null>{
        const searchedSchedule = await this.findOne({
            where:{week_day}
        })
        return searchedSchedule || null;
    }
}