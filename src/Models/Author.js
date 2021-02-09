const mongoose = require('mongoose');

const Author  = mongoose.Schema({
    Name: {
        type: String,
        required:true
    }
});

module.exports = mongoose.model("Author", Author);