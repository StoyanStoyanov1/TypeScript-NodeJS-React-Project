import express, {Express, Request, Response} from "express";

// Instantiate express app
const app: Express = express();

// Define sever port
const port = 3200

// Create a default route.
app.get('/', (req: Request, res: Response)=>{
    res.send('Exress + TypeScript Server')
});

// Start listenting to the requests on the defined port
app.listen(port)