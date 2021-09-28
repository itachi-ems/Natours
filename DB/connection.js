require("dotenv").config();
const mongoose = require('mongoose');

const URI = process.env.DB.replace('<PASSWORD>',process.env.DBPASSWORD)

const connectdb = async()=>{
    await mongoose.connect(URI,{ useNewUrlParser: true,useUnifiedTopology: true });
    console.log('Database connected!')
}

module.exports=connectdb;