import { connectionsRepository } from '@container';
import ConnectionRepository from '@useCases/Connection/repositories/ConnectionRepository';
import ConnectionsRepository from '@useCases/Connection/repositories/ConnectionRepository';
import CountConnectionsService from '@useCases/Connection/services/CountConnectionsService';
import CreateConnectionsService from '@useCases/Connection/services/CreateConnectionsService';
import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';

export default class ConnectionsController {
	async index(request: Request, response: Response) {
    //chamar count service de connections
    try{
      const countConnection = getCustomRepository(ConnectionRepository);
      // const countConnection = new CountConnectionsService(connectionsRepository);
      const total = await countConnection.execute();
      return response.json(total);

    } catch(err) {
      return response.sendStatus(400).json({
        error: err.message
      });
    }
  };
  
  async create(request: Request, response: Response) {
    const { user_id } = request.body;

    //chamar service de criação de connections
    try{
      // const createConnection = new CreateConnectionsService(connectionsRepository);
      const createConnection = getCustomRepository(ConnectionRepository)
      await createConnection.execute();
      return response.sendStatus(201);
    } catch(err){
      return response.sendStatus(400).json({
        error: err.message
      });
    }
  }
}
