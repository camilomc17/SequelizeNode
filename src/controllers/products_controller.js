import { Product } from "../models/Product.js";


export const createProduct = async (req, res) =>{
try {
    const {precio,personId,type_productId} = req.body //req.body es lo que vamos a llamar todo el body
    const newProduct= await Product.create({  //-> instanciamos el model create para crear
    precio,
    personId,
    type_productId,
})
res.json(newProduct) //->res.json para que lo mande en json la instancia
} catch (error) {
    return res.status(500).json({message:error.message})
}
};

export const getProducts = async (req,res)=>{
  try {
    const {id} = req.params;

  const newlistProduct = await Product.findOne({
  where:{id},
  atributtes:[
     'precio',
     'personId',
     'type_productId']
  })
  res.json(newlistProduct);
} catch (error) {
    return res.status(500).json({message:error.message});
  };
};


export const AllProducts = async (req,res)=>{
 try {
    const {precio,personId,type_productId}=req.body
 const Products = await Product.findAll({
    precio,
    personId,
    type_productId,
 })
 res.json(Products) 
 } catch (error) {
    return res.status(500).json({message:error.message});
 }
};


export const UpdateProduct = async (req,res)=>{
    try {
    const {id} = req.params;
    const {precio , personId, type_productId} = req.body;
  
    const updateProduct = await Product.findOne({
        where:{ id },
    });
    updateProduct.set(req.body);//object set() sirve para utilizar solamente un elemento del body
        await updateProduct.save();

        return res.json(updateProduct)
    } catch (error) {
        return res.status(500).json({message:error.message})
    }
};


export const DeleteProduct = async (req,res)=>{
    const { id }= req.params;
    try {
        const result = await Product.destroy({
        where:{ id },
    });
    console.log(result);
     return res.sendStatus(204);
    } catch (error) {
        return res.status(500).json({message:error.message});
    }  
};      



