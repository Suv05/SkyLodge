const mongoose = require("mongoose");
//import listing module
const Listing = require("../Models/Listing");
//imoprt data file
const initData = require("./data");

//conect to mongodb....
mongoose.connect("mongodb://127.0.0.1:27017/WanderLust").then(() => {
  console.log("Sucessfuly connected to dataBase");
});

//insert Sample data to our website
const initDB = async () => {
    try {
      // Clean existing data from the database
      await Listing.deleteMany({});
  
      // Insert data to the database
      await Listing.insertMany(initData.data); // Use `initData.data` to get the array of documents
      console.log("Successfully inserted");
    } catch (err) {
      console.error(err);
    } finally {
      // Close the connection after inserting data
      mongoose.connection.close();
    }
  };
  
  initDB();
