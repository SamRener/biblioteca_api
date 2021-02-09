const mongoose = require('mongoose');

const Category = mongoose.Schema({
    Name: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("Category", Category);