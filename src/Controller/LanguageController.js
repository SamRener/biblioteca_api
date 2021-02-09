const Language = require('../Models/Language');

class LanguageController{
    async Insert(req, res){
        var language = req.body.Language;
        const savedLanguage = Language.create(language);
        return res.json(savedLanguage);
    }
}

module.exports = new LanguageController();
