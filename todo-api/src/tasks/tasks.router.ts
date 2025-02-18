import { Request, Response, Router } from 'express'; 
import { TasksController } from './tasks.controller';

/*Fire the router function*/
export const tasksRouter: Router = Router();

tasksRouter.get('/tasks', 
    async (req: Request, res: Response) => {
        const TaskController = new TasksController();
        const allTasks = await TaskController.getAll();
        res.json(allTasks).status(200);
});

tasksRouter.post(
    '/tasks', 
    (req: Request, res: Response) => {
         
});