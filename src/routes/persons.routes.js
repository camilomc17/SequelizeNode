import { Router } from "express";
import { getPersons, createPerson,updatePerson,deletePerson,getPersonId} from '../controllers/persons_controller.js'



const router = Router()

router.get('/persons',getPersons) //list all persons
router.post('/persons_post',createPerson)//para crear
router.put('/persons_put/:id',updatePerson)//para update
router.delete('/persons_delete/:id',deletePerson)//para delete
router.get('/persons/:id',getPersonId)//list for one

export default router;