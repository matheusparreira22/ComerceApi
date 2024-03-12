import express, {Response, Request} from 'express'

export const route = express.Router()

route.get('/',(req: Request, res: Response)=>{
    return res.status(200).send('<h1>API E-COMERCEsss</h1>')
});

export default route


