import { Router } from "express";
import { createTypeProduct,updateTypeproduct,deleteTypeProduct,allTypeProducts } from "../controllers/type_product_controller.js";

const router_types = Router();

router_types.get('/types_products',allTypeProducts); //list all types
router_types.post('/create_tproduct',createTypeProduct); //crete type
router_types.put('/update_typeProduct/:id',updateTypeproduct);// update type
router_types.delete('/delete_TypeProduct/:id',deleteTypeProduct);//delete type

export default router_types;