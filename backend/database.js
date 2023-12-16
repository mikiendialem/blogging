const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();



const mongoDb=()=>{
    mongoose.connect(process.env.mongodb_url, {useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((err) => {
        console.error('Failed to connect to MongoDB', err);
        process.exit(1);
    })};

module.exports=mongoDb;