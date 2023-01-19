//este file run aplication

import app from './app.js';
import {sequelize} from './database/database.js'

//import models

import './models/Person.js'
import './models/Product.js'
import './models/TypeProduct.js'

async function main(){
try {
        await sequelize.sync({force:true}); //is for probar la connection with the tables
        console.log('CONNECTION SUCCESSFULLY');
        app.listen(4000);
        console.log('Server is listening in port',4000)   
    }
    catch (error) {
       console.log('Unable to connect to the database',error)
    }  
};


main();