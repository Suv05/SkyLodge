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

//create new listing get route
app.get("/listings/new", (req, res) => {
  res.render("listings/new");
});

//Show route
app.get("/listings/:id", async (req, res) => {
  let { id } = req.params;
  const lists = await Listing.findById(id);
  res.render("listings/show.ejs", { lists });
});

//post new listing to /listings route from /listings/new route
app.post("/listings", (req, res) => {
  const list= new Listing(req.body.listing);
  list.save().then(()=>{
    console.log("sucessfuly saved");
  })

  res.redirect('/listings');
  
  
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
