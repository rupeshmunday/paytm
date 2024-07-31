const User = require('../models/user');
const userBodyValidator = require('../validators/user');
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");
const md5 = require('md5');
const Account = require('../models/account')

const login = async (req, res) => {
    console.log("User login started");
    if(req.body.email && req.body.password){
        const { success, error } = userBodyValidator.EmailSigninBodyValidator.safeParse(req.body)
        if(!success || error){
            const msg = {}
            JSON.parse(error.message).map((e) => {
                msg[e.path] = e.message;
            })
            console.log("User login failed please send proper inputs");
            return res.status(411).json({message:msg});
        }
        const existingUser = await User.findOne({
            email : req.body.email,
            password : md5(req.body.password)
        })
        if(!existingUser){
            console.log("User login failed not found");
            return res.status(400).json({
                msg : "User not found"
            })
        }
        const token = jwt.sign({
            userId: existingUser._id
        }, JWT_SECRET);
        console.log("Login Successfull");
        return res.status(200).json({
            token : token
        })
    }
}

const register = async (req, res, next) => {
    console.log("User registration started");
    const { success, error } = userBodyValidator.signupBodyValidator.safeParse(req.body)
    if(!success || error){
        const msg = {}
        JSON.parse(error.message).map((e) => {
            msg[e.path] = e.message;
        })
        console.log("User registration failed please send proper inputs");
        return res.status(411).json({message:msg});
    }
    const existingUser = await User.findOne({
        $or : [
            {userName : req.body.userName},
            {email : req.body.email},
            {phoneNumber: req.body.phoneNumber}
        ]
    })
    if(existingUser){
        console.log("User registration failed : User already exist",existingUser);
        return res.status(411).json({
            message: "Email/userName/phoneNumber already taken/Incorrect inputs"
        })
    }
    const user = await User.create([{
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        userName: req.body.userName,
        email: req.body.email,
        password: md5(req.body.password),
        phoneNumber : req.body.phoneNumber
    }]);
    if(user){
        const userId = user[0]._id;
        const token = jwt.sign({
            userId
        },JWT_SECRET)
        // console.log("User Id--------------------",user[0]._id);
        const account = await Account.create({
            userId: userId,
            balance : 1 + Math.random() * 10000
        })
        console.log("User registration successfull");
        return res.status(200).json({
            msg : "User successfully created",
            token : token
        })
    }
}

const updateUserDeatils = async (req,res) => {
    console.log("update UserDetails started");
    const updateBody = {};
    const {success, error} = userBodyValidator.updateBodyValidator.safeParse(req.body);
    const existingUser = await User.findOne({
        _id : req.userId
    })
    if(!existingUser){
        return res.status(403).json({
            message : "Invalid token"
        })
    }
    Object.keys(req.body).map((key) => {
        console.log(key);
        if(existingUser[key] !== req.body.key){
            updateBody[key] = req.body[key]
            if(key === 'password'){
                updateBody[key] = md5(req.body[key])
            }
        }
    })
    const keys = Object.keys(updateBody);
    if(!keys || !keys.length){
        return res.status(200).json(
            { message: 'No changes were made, data is the same as the existing record' }
        );
    }
    const user = await User.updateOne({
        _id : req.userId
    },  updateBody)
    if(!user){
        return res.status(500).json(
            {message: 'request failed due to some internal server error'}
        )
    }
    return res.status(200).json({
        message : 'User updated successfully'
    })
}

const searchUser = async (req,res) => {
    console.log("User search started");
    if(req && req.query && req.query.filter){
        const filter = req.query.filter || "";
        const users = await User.find({
            $or : [
                {firstName : {$regex : filter, $options : 'i'}},
                {lastName : {$regex : filter, $options : 'i'}}
            ]
        },{
            firstName:1,
            lastName:1,
            _id : 1,
            userName: 1
        })
        if(!users || !users.length){
            console.log("No user found");
            return res.status(200).json({
                message : "No users found with such name",
                users : []
            })
        }
        console.log("User found",users);
        return res.status(200).json({
            message : "User found",
            users : users
        })
    }

}

module.exports = {
    searchUser,
    register,
    login,
    updateUserDeatils,
}