const mongoose = require("mongoose");

const mongoURI =  "mongodb://localhost:27017/taskManager";

const connectDB = async() => {
  try {
    await mongoose.connect(mongoURI)
    console.log("MongoDB connected successfully ")
  }
  catch(error){
     console.error("MongoDB connection failed !" , error);
  }
}

module.exports = connectDB