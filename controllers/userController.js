const { where } = require('sequelize');
const db = require('../models/index.js');
const User = db.user;

const getUsers = async(req, res) => {    
    const data = await User.findAll();
    
    res.status(200).json({data:data});
}

const getUser = async(req, res) => {
    const userDataById = await User.findOne({
        where:{
            id:req.params.id
        }
    });

    res.status(200).json({data:userDataById});
}

const addUser = async(req, res) => {
    const user = req.body;
    
    if(user.length > 1){
        //create bulk
        const userData = await User.bulkCreate(user); 
    }else{
        const userData = await User.create(user);  // create() = build() + save()
    }

    res.status(201).json({data: userData});
}

const updateUser = async(req, res) => {
    const userId = req.params.id;
    const userData = req.body;

    const upateUserData = await User.update(
        userData,
        {
            where:{
                id:userId
            }
        }
    )

    res.status(200).json({data: upateUserData});
}

const deleteUser = async(req, res) => {
    const userId = req.params.id;

    const userStatus = await User.destroy({
        where: {
          id: userId,
        },
      });

      res.status(200).json({data: userStatus});
}

module.exports = {
    getUsers,
    getUser,
    addUser,
    updateUser,
    deleteUser
}