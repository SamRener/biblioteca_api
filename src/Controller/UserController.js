const User = require('../Models/User');

class UserController{
    async Insert(req, res){
        var user = req.body.User;

        const savedUser = await User.create(user);
        return res.json(savedUser);
    }
}

module.exports = new UserController();