import express, { Request, Response } from "express";
import {route} from "./routes/routes";
const app = express();

// const rotaDefault = 'comerce'
app.use('/admin', route)
app.get('/', (req: Request, res: Response) => {
  res.send('Olá, mundo!');
});

export default app