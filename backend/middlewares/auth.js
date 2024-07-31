const { JWT_SECRET } =  require('./../config');
const jwt = require('jsonwebtoken');

const authMiddleWare = (req,res,next) => {
    console.log("req.headers------->",req.headers.authorization);
    if(req && req.headers && req.headers.authorization){
        const authHeader = req.headers.authorization;

        if(!authHeader || !authHeader.startsWith('Bearer ')){
            return res.status(403).json({
                msg : "Please send auth headers in proper format"
            })
        }

        const token = authHeader.split(' ')[1];

        try {
            const decoded = jwt.verify(token,JWT_SECRET)

            req.userId = decoded.userId
            return next();
        } catch (error) {
            return res.status(403).json({
                msg : "Invalid token"
            })
        }
    }
    return res.status(403).json({
        msg : "Authorization failed Please send auth headers"
    })
}

module.exports = {
    authMiddleWare
}