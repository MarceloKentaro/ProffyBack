import User from "../entities/User";

export interface CreateUserDTO{
    name: string
    avatar: string
    whatsapp: string
    bio: string
}

export interface IUserRepository{
    create(data: CreateUserDTO): Promise<number[]>; //<User>
}