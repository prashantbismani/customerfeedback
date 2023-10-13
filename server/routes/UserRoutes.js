const express = require('express');
const router = express.Router();
const { verifyLogin, addUser } = require('../controllers/LoginController');

router.post('/login', (req, res) => {
    verifyLogin(req, res)
});

router.post('/newUser', (req, res) => {
    addUser(req, res)
})

module.exports = router;