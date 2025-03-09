const mongoose = require("mongoose");

const authSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: [true,"please enter your name"],
    trim:true
  },
  lastname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true, 
  },
  mobile: {
   type: String,
   unique: true
  },
  password: {
    type: String,
    required: true, 
  },
}, { timestamps: true }); 

module.exports = mongoose.model("User", authSchema);
