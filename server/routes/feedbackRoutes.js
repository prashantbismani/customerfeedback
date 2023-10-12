const express = require('express');
const router = express.Router();
const { getFeedBacks, addToFeedbacks } = require('../controllers/feedBackController')

router.post('/submit', (req, res) => addToFeedbacks(req, res) );

router.get('/getAll', (req, res) => getFeedBacks(req, res));

router.get('/test', (req, res) => {
    res.send('Hello, World!');
});

module.exports = router;
