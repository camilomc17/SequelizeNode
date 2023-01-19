import {DataTypes} from "sequelize"; //import of the librery DATATYPES
import {sequelize} from '../database/database.js';//import connection to the database
import { Product } from "./Product.js";

export const Person = sequelize.define('persons',{
    id_person:{
       type:DataTypes.INTEGER,
       autoIncrement:true,
       primaryKey:true
       
    },
    name:{
        type:DataTypes.STRING
    },
    identificacion:{
        type:DataTypes.INTEGER
    },
    fecha_compra:{
       type:DataTypes.DATE
    }
},{
    timestamps:true
});

Person.hasMany(Product,{
    foreignKey:'personId', //como va llmar esa foreignKey
    sourceKey:'id_person'//a que se va enlazar
})

Product.belongsTo(Person,{ //many product belong to a person
    foreignKey:'personId',
    targetId:'id_person'
})