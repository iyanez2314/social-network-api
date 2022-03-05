const router = require('express').Router();
const {
    getThoughts,
    getThoughtById,
    addThought,
    updateAThought,
    deleteThought
} = require('../../controllers/Thought-controllers');

// * Set up for the Get All and create /api/users
router
    .route('/')
    .get(getThoughts)
    .post(addThought);

// * set up GET one, PUT, and DELETE at /api/users/:id

router 
    .route('/:id')
    .get(getThoughtById)
    .put(updateAThought)
    .delete(deleteThought);

module.exports = router;  