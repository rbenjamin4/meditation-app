const router = require('express').Router();
const userRoutes = require('./user-routes');
const meditationRoutes = require('./meditation-routes');

router.use('/users', userRoutes);
router.use('/meditations', meditationRoutes);

module.exports = router;
