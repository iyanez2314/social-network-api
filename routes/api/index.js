const router = require('express').Router();
const userRoutes = require('./User-routes');
const thoughtRoutes = require('./Thought-route');

router.use('/thoughts', thoughtRoutes);
router.use('/users', userRoutes);

module.exports = router;