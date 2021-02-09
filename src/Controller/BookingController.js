const Booking = require("../Models/Booking");
const Book = require("../Models/Book");

class BookingController{
    async Get(req, res){
        var bookingId = req.params.id;
        const booking = await Booking.findById(bookingId).populate("User").populate("Book");
        return res.json(booking);
    }

    async Checkout(req, res){
        var userId = req.body.User;
        var bookId = req.body.Book;
        var startDate = req.body.StartDate;
        var endDate = req.body.EndDate;
        var booking = await Booking.create({User: userId, Book: bookId, StartDate: startDate, EndDate: endDate });
        return res.json(booking);
    }
}

module.exports = new BookingController();