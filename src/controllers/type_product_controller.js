import { TypeProduct } from "../models/TypeProduct.js";


export const createTypeProduct = async(req,res)=>{
    try {
        const {type_product} = req.body;
        const typeproduct = await TypeProduct.create({
        type_product,
    })
    res.json(typeproduct);
    } catch (error) {
        return res.status(500).json({message:error.message})
    }
};

export const allTypeProducts = async (req,res) =>{
     const {type_product}= req.body;
     const newTypeProduct = await TypeProduct.findAll({
         type_product
     })

     res.json(newTypeProduct);
};

export const updateTypeproduct = async (req, res) =>{
    try {
    const {id} = req.params;
    const {type_product} = req.body;

    const updatetype = await TypeProduct.findByPk(id);
    updatetype.type_product = type_product;
    await updatetype.save();

    res.json(updatetype);
    } catch (error) {
        return res.status(500).json({message:error.message})
    }

};

export const deleteTypeProduct = async (req, res) =>{
   try {
    const {id} = req.params;
    await TypeProduct.destroy({
    where:{
        id,
     },
   });

   res.send('deletind typeproduct')
   } catch (error) {
    return res.status(500).json({message:error.message});
   }
};
