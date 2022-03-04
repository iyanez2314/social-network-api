const { User } = require('../models');


const userController= {

    // * Get all users 
    getAllUsers(req, res){
        User.find({})
        .then(dbUserData => res.json(dbUserData))
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });
    },

    // * Get User By ID
    getUserById({ params }, res){
        User.findOne({ _id: params.id })
        .then(dbUserData => {
            if(!dbUserData){
                res.status(404).json({ message: 'No user found with this id!' });
                return;
            }
            res.json(dbUserData);
        })
        .catch(err => res.json(err));
    },



    // * creating a user    
    createUser({ body }, res) {
        User.create(body)
        .then(dbUserData => res.json(dbUserData))
        .catch(err => res.json(err));
    },

    // * updating a user
    updateUser({ params, body }, res){
        User.findOneAndUpdate({ _id: params.id }, body, { new: true, runValidators: true})
        .then(dbUserData => {
            if(!dbUserData){
                res.status(404).json({ message: 'No user found with that id!' });
                return;
            }
            res.json(dbUserData);
        })
        .catch(err => {
            console.log(err)
            res.status(400).json(err);
        })
    },

    //* delete a User
    deleteUser({  params }, res){
        User.findOneAndDelete({ _id: params.id })
        .then(dbUserData => {
            if(!dbUserData){
                res.status(404).json({ message: 'No user found with that id!' });
                return;
            }
            res.json(dbUserData);
        })
        .catch(err => res.status(400).json(err));
    }
};

module.exports = userController;