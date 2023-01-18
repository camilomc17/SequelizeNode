import { Router } from "express";
import {createProduct,AllProducts,UpdateProduct,DeleteProduct,getProducts} from '../controllers/products_controller.js'

const router_product = Router();

router_product.get('/products',AllProducts); //list all typesproducts
router_product.post('/product_post',createProduct); //create typeproduct
router_product.put('/product_put/:id',UpdateProduct); // update typesproduct
router_product.delete('/product_delete/:id',DeleteProduct); //delete typeproduct
router_product.get('/list_product/:id',getProducts)  //list type_products for id 

export default router_product;