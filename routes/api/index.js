const router = require('express').Router();
const userRoutes = require('./user-routes');
const meditationRoutes = require('./meditation-routes');
const instructorRoutes = require('./instructor-routes');
const UserMeditationRoutes = require('./user-meditation-routes')


router.use('/users', userRoutes);
router.use('/meditations', meditationRoutes);
router.use('/instructors', instructorRoutes);
router.use('/user-meditations', UserMeditationRoutes);


module.exports = router;
