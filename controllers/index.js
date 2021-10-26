const express = require('express');
const router = express.Router();
const Artists = require('../models/artists');


router.get('/', (req, res) => {
    res.send("Hello!")
});

module.exports = router;