const router = require('express').Router();
const { Meditation, Instructor, UserMeditation, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/login', (req, res) => {
    res.render('login')
})

router.get('/', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/home');
        return;
    } else if (!req.session.loggedIn) {
        res.redirect('/login');
    }
});

router.get('/player', async (req, res) => {
    res.render('player')
})

router.get('/home', withAuth, async (req, res) => {
    try {
        let meditationData = await Meditation.findAll({
            include: [{ model: Instructor }],
            // order: [["users.user_meditation.date_time", "DESC"]],
            limit: 3,
        });
        meditationData = meditationData.map((value) => {
            return value.get({ plain: true });
        })
        let userData = await User.findByPk(req.session.userId, {
            attributes: {
                exclude: ['username', 'email', 'password']
            }
        });
        userData = userData.get({ plain: true });
        console.log(userData)
        res.render('home', {
            meditations: meditationData,
            user: userData,
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/user', async (req, res) => {
    try {
        const userData = await User.findAll();
        res.render('home', { data: userData });
        console.log(userData)
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/profile', async (req, res) => {
    try {
        let userData = await User.findByPk(req.session.userId);
        userData = userData.get({ plain: true });
        console.log(userData)
        res.render('profile', {
            user: userData,
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/api/meditations/:id', async (req, res) => {
    try {
        const meditationData = await Meditation.findByPk(req.params.id, {
            include: [{ model: Instructor }],
        });
        console.log(meditationData)
        res.render('player', { id: req.params.id, data });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/trackList', async (req, res) => {
    try {
        const trackListData = await Meditation.findAll({
            attributes: ['fileName']
        });
        console.log(trackListData)
        res.status(200).json(trackListData)
    } catch (err) {
        res.status(500).json(err);
    }
})

router.get('/profile', (req, res) => {
    res.render('profile')
})


module.exports = router;