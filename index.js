import  express  from "express";
//= const express = require("express")
import bodyParser from "body-parser";

import usersRouter from './routes/users.js';

const app = express();

const PORT = 5000;

app.use(bodyParser.json());//this means we will use data in our app in json format

app.use('/users',usersRouter);

//"/" means home page 
// note : when you go to google you do (get) 
app.get('/',(req,res)=>{
    res.send("Hello from Home page ya 7oka");
}) 

app.listen(PORT,()=>{console.log(`Server is Running on port : http://localhost:${PORT}`)
});