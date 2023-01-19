import { DataTypes } from 'sequelize'; //import DATATYPES of sequelize
import { sequelize } from '../database/database.js'; // import sequelize connecction to the database 
import { Product } from './Product.js'; //import model
export const TypeProduct = sequelize.define('type_products',{
    id_type_product:{
      type:DataTypes.INTEGER,
      autoIncrement:true,
      primaryKey:true
    },
    type_product:{
     type:DataTypes.STRING
    }
}, {
    timestamps:true
});

TypeProduct.hasMany(Product,{
    foreignKey:'type_productid',
    sourceKey:'id_type_product'
})