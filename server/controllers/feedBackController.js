const myModel = require('../models/feedBackModel')

exports.getFeedBacks = async (req, res) => {
    try {
        const feedbacks = await myModel.find({},{"__v": 0});
        return res.status(200).json({
            success: true,
            count: feedbacks.length,
            data: feedbacks
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: `Error getting feedbacks: ${error.message}`
        })
    }
}

exports.addToFeedbacks = async (req, res) => {
    try {
        const feedbackBody = {
            ...req.body,
            createdAt: new Date()
        }
        const response = await myModel.create(feedbackBody);
        return res.status(201).json({
            success: true,
            data: response
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
                error: `Error Adding feedback: ${error.message}`
            })
        }
    }

}