const Author = require('../Models/Author');

class AuthorController {
    async Insert(req, res){
        var author = req.body.Author;

        const savedAuthor = Author.create(author);
        return res.json(savedAuthor);
    }
}

module.exports = new AuthorController();
