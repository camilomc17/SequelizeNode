import { Sequelize } from "sequelize"; //minus instance de Sequelize


export const sequelize= new Sequelize('practicaorm','postgres','camiloMpost',
{
 host:'localhost',
 dialect:'postgres'
})