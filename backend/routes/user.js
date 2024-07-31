// backend/api/index.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/user');
const {authMiddleWare } = require('../middlewares/auth')

router.get("/bulk", authMiddleWare, userController.searchUser);
// Handling user signup
router.post("/register", userController.register);
//Handling user sign in
router.post("/login", userController.login);

router.put("/updateUser", authMiddleWare, userController.updateUserDeatils);

module.exports = router;