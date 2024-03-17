const router = require('express').Router();
const userRoutes = require('./user-routes');
const meditationRoutes = require('./meditation-routes');
const instructorRoutes = require('./instructor-routes');


router.use('/users', userRoutes);
router.use('/meditations', meditationRoutes);
router.use('/instructors', instructorRoutes);


module.exports = router;
