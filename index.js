require("dotenv").config();
console.log(process.env.MONGODB_URL);
const express = require("express");
const mongoose =  require("mongoose");




const app = express();
const mongoDb_URL= process.env.MONGODB_URL;
const port = process.env.PORT || 3002;

mongoose.connect(mongoDb_URL)
.then(()=>{console.log("connection with mongodb successfully made")})
.catch((err )=>{console.log(err);});

app.listen(port , ()=>{
    console.log("lisiening on the port" , port)
})