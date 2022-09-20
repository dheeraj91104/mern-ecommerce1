const mongoose = require("mongoose");

var mongoDBURL = 'mongodb+srv://dheeraj:dheeraj@cluster0.c0wtvss.mongodb.net/home-shopee'

mongoose.connect(mongoDBURL , {useUnifiedTopology:true , useNewUrlParser:true})

var dbconnect = mongoose.connection

dbconnect.on('error' , ()=>{
    console.log(`Mongo DB Connection Failed`);
})

dbconnect.on('connected' , ()=>{
    console.log(`Mongo DB Connection Successfull`);
})

module.exports = mongoose




