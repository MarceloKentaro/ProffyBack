import { IConnectionRepository } from "../repositories/IConnectionsRepository";

export default class CountConnectionsService{
    private connectionsRepository: IConnectionRepository;

    constructor(connectionsRepository: IConnectionRepository){
        this.connectionsRepository = connectionsRepository
    }
    public execute(): Promise<string | number>{
        const number = this.connectionsRepository.count()
        return number;
    }
};