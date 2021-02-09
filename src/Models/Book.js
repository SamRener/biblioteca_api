const mongoose = require('mongoose');

const Book = new mongoose.Schema({
    Title:{
        type: String,
        required: true
    },
    Storage: {
        type: Number,
        required: true
    },
    About: {
        type: String,
        required: true 
    },
    Pages: {
        type: Number,
        required: true
    },
    PublishDate: {
        type: Date,
        required: true
    },
    Languages: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Language"
        }
    ],
    Authors: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Author"
    }],
    Categories: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category"
    }]
});

module.exports = mongoose.model("Book", Book);