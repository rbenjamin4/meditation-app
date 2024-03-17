const router = require('express').Router();
const userRoutes = require('./user-routes');
const meditationRoutes = require('./meditation-routes');
const instructorRoutes = require('./instructor-routes');
const htmlRoutes = require('./htmlroutes')

router.use('/users', userRoutes);
router.use('/meditations', meditationRoutes);
router.use('/instructors', instructorRoutes);
router.use('/',htmlRoutes)

router.get('/', (req, res) => {
    res.render('home');
});



module.exports = router;
