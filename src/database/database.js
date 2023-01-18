import { Sequelize } from "sequelize"; //minus instance de Sequelize


export const sequelize= new Sequelize('practicaorm','postgres','maunac10',
{
 host:'localhost',
 dialect:'postgres'
})