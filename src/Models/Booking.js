const mongoose = require('mongoose');

const Booking = mongoose.Schema({
    StartDate: {
        type: Date,
        required: true
    },
    EndDate: {
        type: Date,
        required: true
    },
    User: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: true
    },
    Book: {
        type: mongoose.Types.ObjectId,
        ref: 'Book',
        required: true
    }
});

module.exports = mongoose.model("Booking", Booking);