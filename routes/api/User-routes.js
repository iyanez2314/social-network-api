const router = require('express').Router();
const {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    removeFriend
} = require('../../controllers/User-controllers');

// * Set up for the Get All and create /api/users
router
    .route('/')
    .get(getAllUsers)
    .post(createUser);

// * set up GET one, PUT, and DELETE at /api/users/:id
router 
    .route('/:id')
    .get(getUserById)
    .put(updateUser)
    .delete(deleteUser);


// * /api/users/:userId/friends/:friendId

router.route('/:userId/friends/:friendsId').post(addFriend);

// * remove a friend /api/users/:userId/friends/:friendId

router.route('/:userId/friends/:friendsId').delete(removeFriend);


module.exports = router;    