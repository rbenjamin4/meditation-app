const router = require('express').Router();
const userRoutes = require('./user-routes');
const meditationRoutes = require('./meditation-routes');
const instructorRoutes = require('./instructor-routes');
const userMeditationRoutes = require('./user-meditation-routes');
const htmlRoutes = require('./htmlroutes');

router.use('/users', userRoutes);
router.use('/meditations', meditationRoutes);
router.use('/instructors', instructorRoutes);
router.use('/user-meditations', userMeditationRoutes);
router.use('/',htmlRoutes)

module.exports = router;
