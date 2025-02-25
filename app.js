const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const app = express();
const productRoute = require('./api/v1/routes/product');


const mongoConnectionString = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@myfirstcluster.gmvzt.mongodb.net/WebApi-2025`;
// connection string to my mongo cluster
mongoose.connect(mongoConnectionString).then(()=>{console.log('connected to mongo succesfully')}).catch(()=>{console.log('connection failed')});


//
app.use(morgan('dev'));
app.use(express.urlencoded({extended : true}));
app.use(express.json());
//
// console.log(process.env.GOOGLE_USER); // added support for dotenv
// const secure = require('./api/v1/middlewares/secure');
// app.use(secure);
//
app.use('/product' , productRoute);
app.all('*' , (req,res)=>{
    return res.status(404).json({msg:"not found 404"})
});
module.exports = app;