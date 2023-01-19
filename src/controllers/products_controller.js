import { Product } from "../models/Product.js";


export const createProduct = async (req, res) =>{
try {
    const {precio,name_product,personid,type_productid} = req.body //req.body es lo que vamos a llamar todo el body
    const newProduct= await Product.create({  //-> instanciamos el model create para crear
    precio,
    name_product,
    personid,
    type_productid,
})
res.json(newProduct) //->res.json para que lo mande en json la instancia
} catch (error) {
    return res.status(500).json({message:error.message})
}
};

export const getProducts = async (req,res)=>{
  try {
    const {id_product} = req.params;

  const newlistProduct = await Product.findOne({
  where:{id_product},
  atributtes:[
     'precio',
     'name_product',
     'personid',
     'type_productid']
  })
  res.json(newlistProduct);
} catch (error) {
    return res.status(500).json({message:error.message});
  };
};


export const AllProducts = async (req,res)=>{
 try {
    const {precio,name_product,personid,type_productid}=req.body
 const Products = await Product.findAll({
    precio,
    name_product,
    personid,
    type_productid,
 })
 res.json(Products) 
 } catch (error) {
    return res.status(500).json({message:error.message});
 }
};


export const UpdateProduct = async (req,res)=>{
    try {
    const {id_product} = req.params;
    const {precio ,name_product, personid, type_productid} = req.body;
  
    const updateProduct = await Product.findOne({
        where:{ id_product },
    });
    updateProduct.set(req.body);//object set() sirve para utilizar solamente un elemento del body
        await updateProduct.save();

        return res.json(updateProduct)
    } catch (error) {
        return res.status(500).json({message:error.message})
    }
};


export const DeleteProduct = async (req,res)=>{
    const { id_product }= req.params;
    try {
        const result = await Product.destroy({
        where:{ id_product },
    });
    console.log(result);
     return res.sendStatus(204);
    } catch (error) {
        return res.status(500).json({message:error.message});
    }  
};      



