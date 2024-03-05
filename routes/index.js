const router = require('express').Router();
const userRoutes = require('./user-route');
const meditationRoutes = require('./meditation-routes');

router.use('/users', userRoutes);
router.use('/meditations', meditationRoutes);

module.exports = router;
