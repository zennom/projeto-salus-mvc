import {Request, Response} from 'express'

import {Unidade} from '../models/Unidade'
import router from '../routes'

export const criarUnidade = async(req: Request, res: Response) =>{
    let {nome,cidade,logradouro,bairro,cep,tel,uf} = req.body

    let novaUnidade = await Unidade.create({nome,cidade,logradouro,bairro,cep,tel,uf})

    res.json({id: novaUnidade.id, nome,cidade,logradouro,bairro,cep,tel,uf})
 
}

export const listarUnidades = async(req:Request, res:Response) =>{
    let lista = await Unidade.findAll()
    res.json({lista})
}

export const pegarUnidade = async(req:Request, res: Response) =>{
    let {id} = req.params

    let unidade = await Unidade.findByPk(id)

    if(unidade){
        res.json({unidade})
    }else{
        res.json({error:"Unidade não cadastrada"})
    }
}

export const atualizaUnidade = async(req:Request, res: Response) =>{
    let {id} = req.params
    let {nome,cidade,logradouro,bairro,cep,tel,uf} = req.body

    let unidade = await Unidade.findByPk(id)
    if(unidade){
        unidade.nome = nome
        unidade.cidade = cidade
        unidade.logradouro = logradouro
        unidade.bairro = bairro
        unidade.cep = cep
        unidade.tel = tel
        unidade.uf = uf

        await unidade.save()
        res.json({unidade})
    } else{
        res.json({error: "Unidade não cadastrada"})
    }
}

export const deletarUnidade = async (req:Request, res: Response) =>{
    let {id} = req.params
    await Unidade.destroy({where: {id}})

    res.json({})
}