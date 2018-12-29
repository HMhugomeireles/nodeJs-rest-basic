const express = require('express');
const app = express();

const productRoutes = require('./app/routes/products');

app.use('/product', productRoutes);

module.exports = app;