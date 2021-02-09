const Category = require('../Models/Category');

class CategoryController{
    async Insert(req, res){
        var category = req.body.Category;
        const savedCategory = Category.create(category);
        return res.json(savedCategory);
    }
}

module.exports = new CategoryController();
