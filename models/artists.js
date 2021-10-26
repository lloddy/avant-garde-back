const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const artistSchema = new Schema ({
    name: String,
    birth: String,
    death: String,
    image: String,
    bio: String
})

module.exports = mongoose.model('Artists', artistSchema)