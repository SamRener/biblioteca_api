const mongoose = require('mongoose');

const Language = mongoose.Schema({
    Name: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("Language", Language);