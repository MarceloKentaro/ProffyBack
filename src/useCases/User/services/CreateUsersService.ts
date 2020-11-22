import {getCustomRepository} from 'typeorm'
import User from '../entities/User'
import UserRepository from '../repositories/UserRepository'

interface Request{
    name:string
    avatar:string
    whatsapp:string
    bio:string
}

export default class CreateUserService{
    public async execute({name, avatar, whatsapp, bio}: Request): Promise<User>{
        const userRepository = getCustomRepository(UserRepository)
        const user = userRepository.create({name, avatar, whatsapp, bio})
        await userRepository.save(user)

        return user
    }
}