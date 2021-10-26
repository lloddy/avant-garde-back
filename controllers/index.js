const express = require('express');
const router = express.Router();
const Artists = require('../models/artists');


router.get('/', (req, res) => {
    res.send("Hello!")
});
// INDEX
router.get('/artists', async (req, res) => {
    try {
        res.json(await Artists.find({}));
    } catch (error) {
        res.status(400).json(error);
    };
});
// DELETE
router.get('/artists/:id', async (req, res) => {
    try {
        res.json(await Artists.findByIdAndDelete(req.params.id));
    } catch (error) {
        res.status(400).json(error);
    };
});
// UPDATE
router.put('/artists/:id', async (req, res) => {
    try {
        res.json(
            await Artists.findByIdAndUpdate(req.params.id, req.body, {
                new: true
            })
        )
    } catch (error) {
        res.status(400).json(error);
    };
});
// CREATE
router.post('/artists', async (req, res) => {
    try {
        res.json(await Artists.create(req.body));
    } catch (error) {
        res.status(400).json(error);
    };
});

module.exports = router;