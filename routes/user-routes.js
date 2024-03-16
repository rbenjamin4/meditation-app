const router = require('express').Router();
const { User } = require('../models');

//log in
router.post('/login', async (req, res) => {
    try {
      const dbUserData = await User.findOne({
        where: {
          email: req.body.email,
        },
      });
  
      if (!dbUserData) {
        res
          .status(400)
          .json({ message: 'Incorrect email or password. Please try again!' });
        return;
      }
  
      const validPassword = await dbUserData.checkPassword(req.body.password);
  
      if (!validPassword) {
        res
          .status(400)
          .json({ message: 'Incorrect email or password. Please try again!' });
        return;
      }
  
      req.session.save(() => {
        req.session.loggedIn = true;
  
        res
          .status(200)
          .json({ user: dbUserData, message: 'You are now logged in!' });
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });
  
  // Logout
router.post('/logout', (req, res) => {
    if (req.session.loggedIn) {
      req.session.destroy(() => {
        res.status(204).end();
      });
    } else {
      res.status(404).end();
    }
  });

router.delete('/:id', async (req, res)=> {
    try {
        const userData = await User.destroy({
          where: {
            id: req.params.id,
          },  
        });
        if (!userData) {
            res.status(404).json({ message: 'No account found with that id'});
            return;
        }

        res.status(200).json({ message: 'Account has been deleted'});
    } catch (err) {
        res.status(500).json(err);
      }
    });
    
    router.put('/updatelistentime', async (req, res) => {
      let userId = 1;


      let currentWeekNumber = getWeekNumber(new Date());

      try {
        const dbUserData = await User.findOne({
          where: {
            id: userId
          },
        });
        console.log('User data week:', dbUserData.weekNumber, typeof dbUserData.weekNumber);
        console.log('Current week:', currentWeekNumber);

        if(dbUserData.weekNumber !== currentWeekNumber) {

          await User.update(
            {
              weekNumber: currentWeekNumber,
              timeListened: req.body.timeListened,
            }, {
              where: {
                  id: userId
              }
            }
          );
          return res.status(204).json();

        }
      } catch (err){
        console.log('Reading user failed:', dbUserData);
      }




      try {
        console.log('SAving User...', req.body.timeListened)
        const meditationData = await User.increment(
          {
            timeListened: req.body.timeListened
          }, {
            where: {
                id: userId
            }
          }
        );
        console.log('SAVED USER.');
        res.status(204).json();

      } catch (err) {
        console.log('ERROR SAVING USER:' , err)
        res.status(500).json(err);
      }
})




function getWeekNumber(d) {
  // Copy date so don't modify original
  d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
  // Set to nearest Thursday: current date + 4 - current day number
  // Make Sunday's day number 7
  d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay() || 7));
  // Get first day of year
  var yearStart = new Date(Date.UTC(d.getUTCFullYear(),0,1));
  // Calculate full weeks to nearest Thursday
  var weekNo = Math.ceil((((d - yearStart) / 86400000) + 1)/7);
  // Return array of year and week number
  return weekNo;
}



// var currentWeekNumber = getWeekNumber(new Date());
// console.log(currentWeekNumber); // This will log the current week number



module.exports = router;