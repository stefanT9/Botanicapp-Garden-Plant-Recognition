const express = require('express');
const app = express();

const productRoutes = require('./routes/plants');


app.use('/plants', productRoutes );


module.exports = app;