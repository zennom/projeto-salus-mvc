import {Model, DataTypes} from 'sequelize'

import {sequelize} from '../instances/mysql'

export interface UnidadeInstance extends Model{
    id:number,
    nome: string,
    cidade:string,
    logradouro:string,
    bairro:string,
    cep:number,
    tel:string,
    uf:string
}

export const Unidade = sequelize.define<UnidadeInstance>('Unidade',{
  id:{
    primaryKey: true,
    autoIncrement:true,
    type: DataTypes.INTEGER
  },
  nome:{
    type:DataTypes.STRING
  },
  cidade:{
    type:DataTypes.STRING
  },
  logradouro:{
    type:DataTypes.STRING
  },
  bairro:{
    type:DataTypes.STRING
  },
  cep:{
    type:DataTypes.STRING
  },
  tel:{
    type:DataTypes.STRING
  },
  uf:{
    type:DataTypes.STRING
  }
},{
    tableName:'unidade',
    timestamps:false
})