const mongoose = require('mongoose');

const UserSignupSchema = new mongoose.Schema({
    FirstName:{
        type:String,
        required:[true,'Please provide your first name']
    },
    LastName:{
        type: String,
        required:true,
    },
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

const UserSignup = mongoose.model('Users',UserSignupSchema);
module.exports=UserSignup;