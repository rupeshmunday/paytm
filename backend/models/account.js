const mongoose = require('mongoose');
const Schema = mongoose.Schema

const accountSchema = Schema({
    userId : {
        type : Schema.Types.ObjectId,
        ref : 'User',
        required : true
    },
    balance : {
        type : Number,
        required : true
    }
})

// const Account = mongoose.model('Account',accountSchema);

let accountModel = new mongoose.model("Account", accountSchema);
module.exports = accountModel;