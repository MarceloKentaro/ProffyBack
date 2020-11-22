import express from 'express';
import ConnectionsController from '../controllers/ConnectionsController';


const connectionRouter = express.Router();
const connectionsController = new ConnectionsController();

connectionRouter.post('/', connectionsController.create);
connectionRouter.get('/', connectionsController.index);

export default connectionRouter;