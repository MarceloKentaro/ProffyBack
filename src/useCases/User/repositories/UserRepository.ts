import User from "../entities/User";


import {EntityRepository, Repository} from 'typeorm'

@EntityRepository(User)
export default class UserRepository extends Repository<User>{
    public async findByName (name: string): Promise<User | null>{
        const searchedUser = await this.findOne({
            where:{name}
        })
        return searchedUser || null;
    }
}