const express = require('express');
const morgan = require('morgan');
const app = express();
const productRoute = require('./api/v1/routes/product');

app.use('/product' , productRoute);
app.use(morgan('dev'));
app.use(express.urlencoded({extended : true}));
app.use(express.json());




module.exports = app;