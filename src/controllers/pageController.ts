import {Request, Response} from 'express'
import { createMenuObject } from '../helpers/createMenuObject'

export const home = (req:Request, res: Response) =>{
    res.render("pages/index",{
        menu:createMenuObject('index')
    })
}
export const info = (req:Request, res: Response) =>{

    res.render("pages/informacoes",{
        menu:createMenuObject('info')
    })
}
export const testes = (req:Request, res: Response) =>{
    res.render("pages/testes",{
        menu:createMenuObject('testes')
    })
}
export const comunidade = (req:Request, res: Response) =>{
    res.render("pages/comunidade",{
        menu:createMenuObject('comunidade')
    })
}

export const sobre = (req:Request, res: Response) =>{
    res.render("pages/sobre",{
        menu:createMenuObject('sobre')
    })
}

export const login = (req:Request, res: Response) =>{
    res.render("pages/login",{
        menu:createMenuObject('login')
    })
}

export const cadastro = (req:Request, res: Response) =>{
    res.render("pages/cadastro",{
       
    })
}