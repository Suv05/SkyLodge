//Express intialization
const express =require('express');
//mongoose intialzation
const mongoose=require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/WanderLust');
//EJS intialization
const ejs=require('ejs');

//seting app with express and view engine
const app = express();
app.set('view engine', 'ejs');


app.get('/',(req,res)=>{
    res.sendStatus(200);
})




app.listen('3000',()=>{
    console.log("App is running at the port 3000");
})