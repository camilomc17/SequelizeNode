import { DataTypes } from "sequelize"; //import DATATYPES of sequelize
import { sequelize } from "../database/database.js"; //import connection de la database
//import { TypeProduct } from "./TypeProduct.js"; 

export const Product = sequelize.define("products",{
    id_product:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    name_product:{
        type:DataTypes.STRING
    },
    precio:{
        type:DataTypes.INTEGER
    }
}, {
    timestamps:true
}
);


