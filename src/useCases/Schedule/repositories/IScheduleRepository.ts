import Schedule from "../entities/Schedule";

export interface CreateScheduleDTO{
    class_id: string
    week_day: number
    from: number
    to: number
}

export interface IScheduleRepository{
    create(data: CreateScheduleDTO): Promise<any>; 
}