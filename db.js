const mongoose = require("mongoose");

var mongoURL = 'mongodb+srv://nevinabila007:navynabilla@cluster0.piw7azs.mongodb.net/Mern-Pizza'

mongoose.connect(mongoURL , {useUnifiedTopology:true , useNewUrlParser:true})

var db = mongoose.connection

db.on('connected' , ()=>{
    console.log('Mongo DB Connection Successfull');
})

db.on('error' , ()=>{
    console.log('Mongo DB Connection failed');
})

module.exports =mongoose