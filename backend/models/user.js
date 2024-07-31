const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName : {
        type : String
    },
    lastName : {
        type : String
    },
    userName:{
        type: String,
        required: true,
        unique: true
    },
    email: {
        type:String,
        required:true,
        unique:true
    },
    password: {
        type : String,
        required : true,
    },
    phoneNumber: {
        type : String,
        required : true,
        unique : true
    },
    isVerified : {
        type : Number,
        enum : [0,1],
        default : 0
    }
}, { autoIndex: false })
let userModel = new mongoose.model("User", userSchema);
module.exports = userModel;