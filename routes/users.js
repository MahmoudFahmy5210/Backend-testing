import express from "express";
import  {v4 as uuidv4} from 'uuid';

const router = express.Router();

let users =[];//because we changed the user by filter method below

//___________________________________________Get Method_____________________________________
router.get('/',(req,res) => {
    console.log(users);
    res.send(users);
});
//___________________________________________Post Method____________________________________
router.post('/',(req,res) => {
    console.log("from console post done");
    //req.body is the data we post
    //console.log(req.body);
    const user = req.body;

    users.push({...user,id:uuidv4()});

    res.send(`User with name ${user.firstname} has been added to Database!`);
})
//___________________________________________Get by ID  _____________________________________
//:means accept anything
router.get('/:id',(req,res)=>{
    //console.log(req.params);//req.params carry the parameter we write /users/(params)
    const {id}=req.params;
    const foundUser=users.find((user)=>user.id===id);
    res.send(foundUser);
})
//___________________________________________Delete Method___________________________________
router.delete('/:id',(req,res)=>{
    const {id} =req.params;
    users = users.filter(user => user.id !== id);
    res.send(`The user with id :${id} has been deleted`);
});
//___________________________________________Patch Method____________________________________
router.patch('/:id',(req,res)=>{
    const {id}=req.params;//catch the id
    const {firstname,lastname,age}=req.body //catch the property which changed , comes from the client through frontend
    const foundUser = users.find(user=>user.id===id);//catch user
    if(firstname){
        foundUser.firstname=firstname;
    }
    if(lastname){
        foundUser.lastname=lastname;
    }
    if(age){
        foundUser.age=age;
    }
    res.send(`User with the id ${id} has been updated`);
})

export default router;