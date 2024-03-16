const router = require('express').Router();
const { Meditation, Instructor } = require('../models');

router.get('/', (req, res) => {
    res.render('login') 
 })

router.get('/login', (req, res) => {
   res.render('login') 
})

router.get('/player', async (req, res) => {
   res.render('player')
})

//TODO: check if needs login
router.get('/home', async (req, res) => {
   try {
      const meditationData = await Meditation.findAll({raw: true}, {
          include: [{ model: Instructor }],
      });
      console.log('meditationData:',meditationData);
      res.render('home', { data: meditationData });
  } catch (err) {
      res.status(500).json(err);
  }
});
//get db info & pass
//if time, when you click play btn it updates list

router.get('/player/:id', async (req, res) => {
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