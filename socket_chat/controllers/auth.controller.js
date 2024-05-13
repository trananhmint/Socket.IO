const message = require('../models/message.model');
const User = require('../models/user.model');
const bcrypt = require('bcrypt');
const {generateToken} = require('../utils/generateToken');

const register = async (req, res) => {
    try {
        const {username, password, fullName, confirmPassword} = req.body;

        if(password !== confirmPassword) {
            return res.status(200).json({
                isSuccess: false,
                data: null,
                message: "Password does not match"
            })
        }

        const user = await User.findOne({username: username});
        if(user) {
            return res.status(200).json({
                isSuccess: false,
                data: null,
                message: "Username has been existed"
            })
        }

        const hashPassword = await bcrypt.hash(password, 10);

        const avatar = "https://avatar.iran.liara.run/public/boy";
        const newUser = new User({
            username: username,
            password: hashPassword,
            fullName: fullName,
            avatar: avatar,
        })

        await newUser.save();

        return res.status(200).json({
            isSuccess: true,
            data: newUser,
            message: "Register Successfully"
        })



    } catch (error) {
        return res.status(200).json({
            isSuccess: false,
            data: null,
            message: "Error server"
        })
    }
}

const login = async (req, res) => {
    try {
        const {username, password} = req.body;
        const user = await User.findOne({username: username});
        

        const isCorrectPassword = await bcrypt.compare(
            password, user?.password || ''
        )

        if(!isCorrectPassword || !user) {
            return res.status(200).json({
                isSuccess: false,
                data: null,
                message: "Invalid username or password"
            })
        }

        const token = generateToken(user._id);
        
        return res.status(200).json({
            isSuccess: true,
            data: {
                id: user._id,
                token: token,
            },
            message: "Login Successfully"
        })



    } catch (error) {
        return res.status(200).json({
            isSuccess: false,
            data: null,
            message: "Error server"
        })
    }
}

const testMiddleware = async (req, res) => {

    return res.status(200).json({
        isSuccess: true,
        data: req.user,
        message: "Testing Successfully"
    })
}

module.exports = {
    register,
    login,
    testMiddleware,
}