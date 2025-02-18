import { Request, Response, Router } from 'express'; 

/*Fire the router function*/
export const tasksRouter: Router = Router();

tasksRouter.get('/tasks', (req: Request, res: Response) => {
    res.send(`Express + TypeScript Server`);
});