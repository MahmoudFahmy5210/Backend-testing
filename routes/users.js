import express from "express";
import  {getUser,createUser,updateUser,getUserById,deleteUser} from '../controllers/users.js'

const router = express.Router();


//___________________________________________Get Method_____________________________________

router.get('/',getUser);

//___________________________________________Post Method____________________________________

router.post('/',createUser);

//___________________________________________Get by ID  _____________________________________

//:means accept anything
router.get('/:id',getUserById);

//___________________________________________Delete Method___________________________________

router.delete('/:id',deleteUser);
//___________________________________________Patch Method____________________________________
router.patch('/:id',updateUser);

export default router;