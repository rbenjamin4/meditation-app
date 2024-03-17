const router = require('express').Router();
const { Meditation, Instructor, User } = require('../models');

// the `/meditations` endpoint

router.get('/', async (req, res) => {
    try {
        const meditationData = await Meditation.findAll({raw: true, 
            include: [{ model: Instructor }, { model: User }],
        });
        res.render('all-meditations', { data: meditationData });
        console.log(meditationData)
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const meditationData = await Meditation.findByPk(req.params.id, {raw: true, 
            include: [{ model: Instructor }],
        });

        if (!meditationData) {
            res.status(404).json({ message: 'No meditation found with that ID!' });
            return;
        }

        res.render('meditation', { data: meditationData });
        console.log(meditationData)

    } catch (err) {
        res.status(500).json(err);
    }
});

router.post('/', async (req, res) => {
    try {
        const newMeditation = await Meditation.create({
            title: req.body.title,
        });
        res.status(200).json(newMeditation);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.put('/:id', async (req, res) => {
    try {
        const meditationData = await Meditation.update(
            req.body, {
            where: {
                id: req.params.id,
            }
        }
        );
        res.status(204).json();
    } catch (err) {
        res.status(400).json(err);
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const meditationData = await Meditation.destroy({
            where: {
                id: req.params.id,
            },
        });

        if (!meditationData) {
            res.status(404).json({ message: 'No meditation found with that ID!' });
            return;
        }

        res.status(200).json({ message: 'Meditation has been deleted!' });
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
