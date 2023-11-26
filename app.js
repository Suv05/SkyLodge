//import listing module
const Listing = require("./Models/Listing");

//Express intialization
const express = require("express");
//intialize body-parser
const bodyParser = require("body-parser");
//mongoose intialzation
const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/WanderLust");
//EJS intialization
const ejs = require("ejs");
const path = require("path");

//setting the app to express
const app = express();
//now set view engine and public css and also set path
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

//Index route
app.get("/listings", async (req, res) => {
  const allListing = await Listing.find({});
  res.render("listings/index.ejs", { allListing });
});

app.get("/listings/:id",async(req, res) => {
  let {id} = req.params;
  const lists= await Listing.findById(id);
  res.render('listings/show.ejs',{lists});

});

app.listen("3000", () => {
  console.log("App is running at the port 3000");
});

// app.get('/testlisting',async(req,res)=>{
//     const samplelisting=new Listing({
//         title:"Ladvore House La dehi",
//         description:"You wont regereat here",
//         price:255,
//         country:"india",
//         location:"bhubaneswar"
//     })

//     await samplelisting.save();
//     console.log("Susecfuly save to db");
//     res.send("Done")
// })
