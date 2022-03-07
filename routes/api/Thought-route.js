const router = require('express').Router();
const {
    getThoughts,
    getThoughtById,
    addThought,
    updateAThought,
    deleteThought,
    addReaction,
    removeReaction
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

// * Add reaction to a thought /api/thoughts/:thoughtId/reactions
router.route('/:thoughtId/reactions').post(addReaction).delete(removeReaction)    

module.exports = router;  