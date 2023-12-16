const mongoose = require('mongoose');

const UserLoginSchema = new mongoose.Schema({
    email:{
        type:String,
        unique : true ,
        lowercase:true,  //converts the email to lower case
        required:[true,"please enter an email"] ,//if not provided show error message
    },
    password:{
        type:String,
        required: [true, "Please provide a password"],
        minlength:6 //If less than 6 it will throw error
    }
});

const UserLogin = mongoose.model('Users',UserLoginSchema);
module.exports=UserLogin;