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
//method override
const methodOverride = require("method-override");
//requiring ejs-mate
const engine = require('ejs-mate')

//setting the app to express
const app = express();
//now set view engine and public css and also set path
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
// Use method-override middleware
app.use(methodOverride("_method"));

//using ejs mate
app.engine('ejs', engine);

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

//get request to edit listing route
app.get("/listings/:id/edit", async (req, res) => {
  let { id } = req.params;
  const lists = await Listing.findById(id);

  res.render("listings/edit.ejs", { lists });
});

//Show route
app.get("/listings/:id", async (req, res) => {
  let { id } = req.params;
  const lists = await Listing.findById(id);
  res.render("listings/show.ejs", { lists });
});

//post new listing to /listings route from /listings/new route
app.post("/listings", (req, res) => {
  const list = new Listing(req.body.listing);
  list.save().then(() => {
    console.log("sucessfuly saved");
  });

  res.redirect("/listings");
});

//put requset from edit route for update the listing
app.put("/listings/:id", async (req, res) => {
  let { id } = req.params;
  await Listing.findByIdAndUpdate(id, { ...req.body.listing });
  res.redirect(`/listings/${id}`);
});

//delete listing from show route
app.delete('/listings/:id',async(req,res)=>{
  let { id } = req.params;
  let deletedListings= await Listing.findByIdAndDelete(id);
  console.log(deletedListings);

  res.redirect('/listings');

})

app.listen("3000", () => {
  console.log("App is running at the port 3000");
});
