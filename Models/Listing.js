//Defining the listing module
const mongoose = require("mongoose");
//Storing mongooes.schema for further refrence
const Schema = mongoose.Schema;

//Defining schema here
const ListingSchema = new Schema({
  //set title to require...
  title: {
    type: String,
    required: true,
  },
  description: String,
  //trying to show a default image to user
  image: {
    type: String,
    set:function(value){
        if(value===""){
            return './img/todd-kent-178j8tJrNlc-unsplash.jpg' || value
        }
    }
  },
  price: Number,
  location: String,
  country: String,
});

// Create a model based on the schema
const Listing = mongoose.model("Listing", ListingSchema);

// Export the model for use in other files
module.exports = Listing;
