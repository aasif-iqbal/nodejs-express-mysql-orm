const db = require('../models');
const user = db.user;

const getUser = async(req, res) => {
    // const data = 
    res.send({data:"get user data"});
}

module.exports = {
    getUser:getUser
}