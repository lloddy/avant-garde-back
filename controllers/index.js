const express = require('express');
const router = express.Router();
const Artists = require('../models/artists');


router.get('/', (req, res) => {
    res.send("Hello!")
});

router.get('/artists', async (req, res) => {
    try {
        res.json(await Artists.find({}));
    } catch (error) {
        res.status(400).json(error);
    }
});

module.exports = router;