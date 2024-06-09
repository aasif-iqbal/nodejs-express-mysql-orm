const db = require('../models/index.js');
// console.log(db);
const User = db.user;
console.log('User', typeof User);

const getUser = async(req, res) => {
    
    const data = await User.findAll();
    
    res.send({data:data});
}

const addUser = async(req, res) => {
    const user = req.body;
    // console.log(user);
    const userData = await User.create(user);  // create() = build() + save()

    // userData.save();
    res.send({data: userData});
}

module.exports = {
    getUser,
    addUser
}