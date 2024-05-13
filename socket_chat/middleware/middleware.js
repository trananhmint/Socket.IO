const jwt = require('jsonwebtoken');
const User = require('../models/user.model');

const middleware = async (req, res, next) => {
    const authHeader = req.headers.authorization;
    if(!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(200).json({
            isSuccess: false,
            data: null,
            message: "Token is invalid"
            
        })
    }
    const token = authHeader.split(' ')[1];
    try {
        const decode = jwt.verify(token, process.env.SECRET);

        const user = await User.findById(decode.id);
        if(!user) {
            return res.status(200).json({
                isSuccess: false,
                data: null,
                message: "User is not existed"
            })
        }

        req.user = user;
        next();

        
    } catch (error) {
        return res.status(200).json({
            isSuccess: false,
            data: null,
            message: "Error server"
        })
    }
}


module.exports = {middleware};
