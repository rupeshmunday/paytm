const { default: mongoose } = require("mongoose");
const Account = require("../models/account");

const checkBalance = async (req,res) => {
    console.log("Check balance started",req.userId);
    const account = await Account.findOne({
        userId : req.userId
    },{balance : 1})
    if(account && account.balance){
        console.log("Check balance ended", req.userId);
        return res.status(200).json({
            message : "Balance fetched successfully",
            Balance : account.balance
        })
    }
    return res.status(500).json({
        "message":"something went wrong"
    })
}
const transferBalance = async (req,res) => {
    console.log("Transfer Balance started",req.userId);
    const session = await mongoose.startSession();

    session.startTransaction();

    const account = await Account.findOne({
        userId : req.userId
    }).session(session);

    if (!account || account.balance < req.body.amount) {
        await session.abortTransaction();
        return res.status(400).json({
            message: "Insufficient balance"
        });
    }

    const toAccount = await Account.findOne({ _id: req.body.to }).session(session);

    if (!toAccount) {
        await session.abortTransaction();
        return res.status(400).json({
            message: "Invalid account"
        });
    }
    
    await Account.updateOne({ userId: req.userId }, { $inc: { balance: -req.body.amount } }).session(session);
    await Account.updateOne({ _id: req.body.to }, { $inc: { balance: req.body.amount } }).session(session);

    // Commit the transaction
    await session.commitTransaction();
    res.json({
        message: "Transfer successful",
    });
}

module.exports = {
    checkBalance,
    transferBalance,
}