const router = require('express').Router();
const { Meditation, Instructor, UserMeditation } = require('../models');

 router.get('/login', (req, res) => {
    res.render('login') 
 })

router.get('/', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/home');
      return;
    }
  
    res.render('login');
  });

router.get('/player', async (req, res) => {
   res.render('player')
})

//TODO: check if needs login
router.get('/home', async (req, res) => {
   try {
      const meditationData = await Meditation.findAll({
          include: [{ model: Instructor }],
         //  order: [["users.user_meditation.date_time", "DESC"]],
          limit: 3,
      });
      console.log('meditationData:',meditationData);
      res.render('home', { data: meditationData });
  } catch (err) {
      res.status(500).json(err);
  }
});
//get db info & pass
//if time, when you click play btn it updates list

// router.get('/home', async (req, res) => {
//    try {
//        const recentMeditations = await UserMeditation.findAll({raw: true,
//            include: [{ model: Meditation }],
//            order: [["date_time", "DESC"]],
//            limit: 3,
//        });
//        res.render('home', { recent: recentMeditations });
//    } catch (err) {
//        res.status(500).json(err);
//    }
// });

router.get('/api/meditations/:id', async (req, res) => {
   try {
      const meditationData = await Meditation.findByPk(req.params.id, {
          include: [{ model: Instructor }],
      });
      console.log(meditationData)
      res.render('player', { id:req.params.id, data });
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