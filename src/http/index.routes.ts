import { Router } from 'express';
import classesRouter from './Classes/routes/routes';
import connectionsRouter from './Connections/routes/routes';
import userRouter from './Users/routes/routes';

const routes = Router();

routes.use('/classes', classesRouter);
routes.use('/connections', connectionsRouter);
routes.use('/users', userRouter);

export default routes;