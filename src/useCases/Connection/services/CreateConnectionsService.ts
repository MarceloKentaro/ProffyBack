import { IConnectionRepository } from "../repositories/IConnectionsRepository";

export default class CreateConnectionsService{
    private connectionRepository: IConnectionRepository;

    constructor(connectionsRepository: IConnectionRepository){
        this.connectionRepository = connectionsRepository
    }
    public async execute(user_id: number): Promise<number[] | null>{
        const connection = await this.connectionRepository.create(user_id);
        return connection;
    }
};