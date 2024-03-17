const router = require('express').Router();

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
  
    //weekly goal

    function saveWeeklyGoalAsInteger(goal) {
      console.log("Weekly Goal as an integer: " + goal);

      fetch('/updateWeeklyGoal', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ weeklyGoal: goal }),
    })
    .then(response => {
        if (response.ok) {
            console.log('Weekly goal updated successfully!');
        } else {
            console.error('Failed to update weekly goal');
        }
    })
    .catch(error => {
        console.error('Error updating weekly goal:', error);
    });
}

router.put('/updateWeeklyGoal', (req, res) => {
  const { weeklyGoal } = req.body;
  res.status(200).send('Weekly goal updated successfully');
});

module.exports = router;