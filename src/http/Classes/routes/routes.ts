import express from 'express';
import ClassesController from '../controllers/ClassesController';

const classRouter = express.Router();
const classesControllers = new ClassesController();

classRouter.get('/', classesControllers.index);
classRouter.post('/', classesControllers.create);

export default classRouter;