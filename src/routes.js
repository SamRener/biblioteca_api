const BookController = require('./Controller/BookController');
const AuthorController = require('./Controller/AuthorController');
const CategoryController = require('./Controller/CategoryController');
const LanguageController = require('./Controller/LanguageController');
const BookingController = require('./Controller/BookingController');
const UserController = require('./Controller/UserController');

const express = require('express');
const router = express.Router();

router.post('/Author', AuthorController.Insert);

router.post('/Category', CategoryController.Insert);

router.post('/Language', LanguageController.Insert);

router.post('/User', UserController.Insert);

router.post('/Booking', BookingController.Checkout);
router.get('/Booking/:id', BookingController.Get);

router.post('/Book', BookController.Insert);
router.get('/Book/:id', BookController.Get);
router.get('/Book/Category/:id', BookController.GetByCategory);
router.get('/Book/Author/:id', BookController.GetByAuthor);
router.get('/Book/Related/:id', BookController.GetRelated);
router.post('/Book/Key/:id', BookController.GetByKey);


module.exports = router;