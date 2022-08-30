import {Model, DataTypes} from 'sequelize'

import {sequelize} from '../instances/mysql'

export interface UnidadeInstance extends Model{
    id:number,
    nome: string,
    cidade:string,
    logradouro:string,
    bairro:string,
    cep:number,
    tel:number,
    uf:string
}

export const Unidade = sequelize.define<UnidadeInstance>('Unidade',{
  
})