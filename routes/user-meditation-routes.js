const router = require('express').Router();
const { UserMeditation } = require('../models');







router.get('/', async (req, res) => {
    try {
        const meditationData = await Meditation.findAll({raw: true}, {
            include: [{ model: Instructor }],
        });
        res.render('all-meditations', { data: meditationData });
    } catch (err) {
        res.status(500).json(err);
    }
});