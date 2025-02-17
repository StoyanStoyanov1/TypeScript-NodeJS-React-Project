import express, {Express, Request, Response} from "express";

import dotenv from "dotenv";

// Instantiate express app
const app: Express = express();
dotenv.config();

// Define sever port
const port = process.env.PORT;

// Create a default route.
app.get('/', (req: Request, res: Response)=>{
    res.send('Exress + TypeScript Server')
});

// Start listenting to the requests on the defined port
app.listen(port)