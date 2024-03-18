const router = require('express').Router();
const { UserMeditation, Meditation } = require('../../models');

// router.get('/home', async (req, res) => {
//     try {
//         const recentMeditations = await UserMeditation.findAll({
//             include: [{ model: Meditation }],
//             order: [["date_time", "DESC"]],
//             limit: 3,
//         });
//         res.render('home', { recent: recentMeditations });
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });


// router.post('/recent-meditations', async (req, res) => {
//     try {
//         const recentMeditation = await UserMeditation.findAll({

//         })
//     }
// });


//post route for when they play to update time last played

//meditation where userid

module.exports = router;
