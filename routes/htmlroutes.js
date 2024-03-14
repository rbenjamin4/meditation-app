const router = require('express').Router();
const { Meditation, Instructor } = require('../models');

router.get('/', (req, res) => {
    res.render('login') 
 })

router.get('/login', (req, res) => {
   res.render('login') 
})
//TODO: check if needs login
router.get('/home', async (req, res) => {
   try {
      const meditationData = await Meditation.findAll({raw: true}, {
          include: [{ model: Instructor }],
      });
      console.log(meditationData)
      res.render('home', { data: meditationData });
  } catch (err) {
      res.status(500).json(err);
  }
});
//get db info & pass
//if time, when you click play btn it updates list

router.get('/player/:id', (req, res) => {
   res.render('player', { id:req.params.id });
});



module.exports = router;