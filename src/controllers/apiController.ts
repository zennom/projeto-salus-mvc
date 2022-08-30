import {Request, Response} from 'express'

import {Unidade} from '../models/Unidade'
import router from '../routes'

export const criarUnidade = (req: Request, res: Response) =>{
    console.log((req.body))
    res.json({})
}

