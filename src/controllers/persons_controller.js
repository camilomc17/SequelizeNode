import { Person } from "../models/Person.js";

export const getPersons = async (req, res) => {
  try {
    const persons = await Person.findAll();
    res.json(persons); //res.json send the data client
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getPersonId = async (req, res)=>{
try {
    const {id_person} = req.params;
    const personid = await Person.findOne({
      where:{
          id_person,
      },
    });
  
    if(!personid) return res.status(404).json({message: 'Person no exist'})
  
    res.json(personid);
} catch (error) {
    return res.status(500).json({message:error.message});
}
};

export const createPerson = async (req, res) => {
  //async va con await
  try {
    const { name, identificacion, fecha_compra } = req.body; //trae los datos el req.body
    const newPerson = await Person.create({ //await para consult la DB
      name, //se le asignan si son diferentes
      identificacion,
      fecha_compra,
    });
    res.json(newPerson); //res.json send the data client
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updatePerson = async(req, res) =>{
try {
    const { id_person } = req.params;
    const { name, identificacion,fecha_compra } = req.body;
  
    const personupdate = await Person.findByPk(id_person);
    personupdate.name =name;
    personupdate.identificacion = identificacion;
    personupdate.fecha_compra = fecha_compra;
    await personupdate.save();
  
    res.json(personupdate);
} catch (error) {
    return res.status(500).json({message:error.message})
}
};

export const deletePerson = async(req, res) =>{
  try {
    const {id_person} = req.params //recibir el parametro para eliminar
    await Person.destroy({
    where:{
        id_person,
    },
   });
    res.send('deleting person')
  } catch (error) {
    return res.status(500).json({ message:error.message });
  }
}