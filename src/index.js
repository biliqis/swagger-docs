"use strict";
const express = require('express');
const path = require('path');
const swaggerUi = require('swagger-ui-express');
const yamlSwaggerFile = require('./docs_yaml');
//express app
const app = express();
app.use('/api/docs', swaggerUi.serve,swaggerUi.setup(yamlSwaggerFile));
app.get('/', (req,res) => {
    res.send('welcome to post-swag!, to view this amazing docs, go to this url https://post-swag.herokuapp.com/api/docs/')
})
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`api is listening on port ${port}`));
