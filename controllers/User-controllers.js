const { User } = require('../models');


const userController= {

    // * Get all users 
    getAllUsers(req, res){
        User.find({})
        .populate({
            path: 'thoughts',
            select: '-__v'

        })
        .populate({
            path: 'friends'
        })
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
    },

    //* add a friend
    addFriend(req, res){
        User.findOneAndUpdate(
            { _id: req.params.userId },
            { $addToSet: { friends: body } },
            { new: true }
        )
        .then(dbFriendData => {
            if(!dbFriendData){
                res.status(404).json({ message: 'No user found with this id!' })
                return;
            }
            res.json(dbFriendData);
        })
        .catch(err => res.json(err))
    },

    // * remove friend
    removeFriend(req , res){
        User.findOneAndUpdate(
            { _id: req.params.userId },
            { $pull: { friends: { friendId: params.friendId } } },
            { new: true }
        )
        .then(dbFriendData => res.json(dbFriendData))
        .catch(err => res.json(err))
    }


};

module.exports = userController;