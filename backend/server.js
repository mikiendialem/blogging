const express = require('express');
const bodyparser = require('body-parser');
const mongoDb = require('./database');
const dotenv = require('dotenv');
const cors = require('cors');
const app = express();
const authentication = require('./routes/authentication');
const Logout =require('./routes/Logout')
const Blogs = require('./routes/Blogs')

dotenv.config();
mongoDb();
app.use(cors());
app.use(bodyparser.json());
app.use('/auth',authentication);
app.use('/logout',Logout);
app.use('/blogs',Blogs);

const port = process.env.PORT || 3000;

app.listen(port,()=>{
    console.log(`Server is running on ${port}`);
})