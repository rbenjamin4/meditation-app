const router = require('express').Router();
const { UserMeditation, Meditation } = require('../models');

router.get('/home', async (req, res) => {
    try {
        const recentMeditations = await UserMeditation.findAll({
            where: user.id === userId,
            include: [{ model: Meditation }],
            order: [["date_time", "DESC"]],
            limit: 3,
        });
        res.render('home', { recent: recentMeditations });
    } catch (err) {
        res.status(500).json(err);
    }
});

//post route for when they play to update time last played

//meditation where userid

module.exports = router;
