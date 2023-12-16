const express = require('express');
const bodyparser = require('body-parser');
const mongoDb = require('./database');
const dotenv = require('dotenv');
const app = express();

mongoDb();
app.use(bodyparser.json());
const port = process.env.PORT || 3000;

app.listen(port,()=>{
    console.log(`Server is running on ${port}`);
})