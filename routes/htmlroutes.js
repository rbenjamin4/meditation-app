const router = require('express').Router();
const { Sequelize } = require('sequelize');
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
    console.log("=====HOME ROUTE========")
    try {
        let data = await User.findOne({
            include: [{
                model: Meditation, through: UserMeditation, include: { model: Instructor },
                        }],
                        attributes: {
                            exclude: ['username', 'email', 'password']
                        },
                        where: {
                            id: req.session.userId
                        },
        });
        data = data.get({ plain: true });
        console.log(data)

        res.render('home', {
            meditations: data.meditations,
            userData: data,
            user: req.session,
        });
    } catch (err) {
        console.log("Home route ERROR-----", err)
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
    console.log("/profile", req.session)
    try {
        let userData = await User.findByPk(req.session.userId);
        console.log(userData, req.session, "----PROFILE----")
        // userData = userData.get({ plain: true });
        if (req.session.loggedIn) {
            res.render('profile', {
                user: userData,
            });
        } else if (!req.session.loggedIn) {
            res.redirect('/login');
        };
    } catch (err) {
        console.log(err)
        res.status(500).json(err);
    }
});

router.get('/meditations/:id', async (req, res) => {
    try {
        const meditationData = await Meditation.findByPk(req.params.id, {
            include: [{ model: Instructor }],
        });
        console.log(meditationData)
        // await UserMeditation.create({
        //     userId: req.session.userId,
        //     meditationId: req.params.id,
        // })
        res.render('player', { id: req.params.id, data: meditationData });
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

// router.get('/profile', (req, res) => {
//     res.render('profile')
// })


module.exports = router;