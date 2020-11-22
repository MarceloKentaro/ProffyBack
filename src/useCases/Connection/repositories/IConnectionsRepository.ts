import { Connection } from "typeorm";

export interface CreateConnectionDTO{
    user_id: number
}

export interface IConnectionRepository{
    create(data: CreateConnectionDTO): Promise<Connection>; 
}