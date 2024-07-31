// backend/routes/account.js
const express = require('express');
const accountController = require('./../controllers/account')
const router = express.Router();
const {authMiddleWare} = require('./../middlewares/auth')

router.get("/balance", authMiddleWare, accountController.checkBalance);
router.post("/transfer", authMiddleWare, accountController.transferBalance)
module.exports = router;