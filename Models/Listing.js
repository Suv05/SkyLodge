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
    default:'https://img.freepik.com/free-photo/modern-residential-district-with-green-roof-balcony-generated-by-ai_188544-10276.jpg?size=626&ext=jpg&ga=GA1.1.1826414947.1700352000&semt=ais',
    //if user don't have any image then this should work
    set:function(value){
        if(value===""){
            return 'https://img.freepik.com/free-photo/modern-residential-district-with-green-roof-balcony-generated-by-ai_188544-10276.jpg?size=626&ext=jpg&ga=GA1.1.1826414947.1700352000&semt=ais' || value
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
