import Connection from '../entities/Connection';
import {EntityRepository, Repository} from 'typeorm'


@EntityRepository(Connection)
export default class ConnectionRepository extends Repository<Connection>{
    execute() {
      throw new Error('Method not implemented.');
    }
    public async findByUserIds(id: number): Promise<Connection[] | null>{
        const searchedConnection = await this.find({
            where:{id},
            relations:['user'],
            join: {alias: 'user_id'}
        })

        return searchedConnection|| null;
    }
}



// export default class ConnectionsRepository {
//     count() {
//         throw new Error("Method not implemented.");
//     }
// 	async index(request: Request, response: Response): Promise<Response> {
//     const totalConnections = await db('connections').count('* as total');

//     const { total } = totalConnections[0];

//     return response.json({ total });
//   }
  
//   async create(request: Request, response: Response): Promise<Response> {
//     const { user_id } = request.body;
    
//     await db('connections').insert({
//       user_id,
//     });

//     return response.status(201).send();
//   }
// }