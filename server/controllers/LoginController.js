const CryptoJS =  require('crypto-js');
const myModel = require('../models/userCredentials')

exports.verifyLogin = async (req, res) => {
    try {
        const { username, password } = req.body
        console.log(username, password);
        const result = await myModel.findOne({username, password},{"__v": 0, password: 0});
        console.log(result);
        if (result) {
            return res.status(200).json({
                success: true,
                data: result
            })  
        } else {
            return res.status(401).json({
                success: false,
                error: 'Invalid username or password'
            })  
        }
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: `Error getting feedbacks: ${error.message}`
        })
    }
}

exports.addUser = async (req, res) => {  
    try {
        req.body.password = CryptoJS.SHA256(req.body.password).toString();
        const response = await myModel.create(req.body);
        return res.status(201).json({
            success: true,
            data: {
                _id: response._id
            }
        })
    } catch (error) {
        console.log(req);

        if(error.name === 'ValidationError') {
            const messages = Object.values(error.errors).map(val => val.message);
            return res.status(400).json({
                success: false,
                error: messages
            })
        } else {
            return res.status(500).json({
                success: false,
                error: `Error Adding user: ${error.message}`
            })
        }
    }
}