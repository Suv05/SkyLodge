//import listing module
const Listing=require('./Models/Listing')


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

app.get('/testlisting',async(req,res)=>{
    const samplelisting=new Listing({
        title:"Ladvore House La dehi",
        description:"You wont regereat here",
        price:255,
        country:"india",
        location:"bhubaneswar"
    })

    await samplelisting.save();
    console.log("Susecfuly save to db");
    res.send("Done")
})



app.listen('3000',()=>{
    console.log("App is running at the port 3000");
})