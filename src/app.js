//tiene la configuracion de express

import express from 'express' //import de express
import router from './routes/persons.routes.js'; //import routes para la ejecucion
import router_product from './routes/products.routes.js';
import router_types from './routes/typeproducts.routes.js';


const app = express(); //save import express en app

//middlewares->use para usar las imports
app.use(express.json()); //interpretar un json
app.use(router);
app.use(router_product);
app.use(router_types);


export default app;  //export para utilizarlo en el index 