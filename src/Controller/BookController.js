const Book = require('../Models/Book');

class BookController {
    async Insert(req, res){
        var book = req.body.Book;

        const savedBook = Book.create(book);
        return res.json(savedBook);
    }

    async Get(req, res){
        var id = req.params.id;
        const book = await Book.findById(id).populate('Authors').populate('Categories');
        return res.json(book);
    }

    async GetByCategory(req, res){
        var category = req.params.id;
        const books = await Book.find({Categories: [category]});
        return res.json(books);
    }

    async GetByAuthor(req, res){
        var author = req.params.id;
        const books = await Book.find({Authors: [author]});
        return res.json(books);
    }

    async GetByKey(req, res){
        var key = req.params.id;
        const books = await Book.find(
            {
                $or:[
                    { Title: { "$regex": key, "$options": "i" }} ,
                    {About: { "$regex": key, "$options": "i" }}
                ]
            })
        return res.json(books);
    }

    async GetRelated(req, res){
        var bookId = req.params.id;
        const book = await Book.findById(bookId);
        
        const books = await Book.find(
            {
                $or:[ 
                    { Authors: book.Authors },
                    {Categories: book.Categories }
                ]
            }
            );
        return res.json(books);
    }

}

module.exports = new BookController();