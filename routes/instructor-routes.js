const router = require('express').Router();
const { Meditation, Instructor } = require('../models');

// the `/instructors` endpoint

router.get('/', async (req, res) => {
    try {
        const instructorData = await Instructor.findAll({
            include: [{ model: Meditation }],
        });
        res.render('all-instructors', { data: instructorData });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const instructorData = await Instructor.findByPk(req.params.id, {
            include: [{ model: Meditation }],
        });

        if (!instructorData) {
            res.status(404).json({ message: 'No instructor found with that ID!' });
            return;
        }

        res.render('instructor', { data: instructorData });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.post('/', async (req, res) => {
    try {
        const newInstructor = await Instructor.create({
            title: req.body.title,
        });
        res.status(200).json(newInstructor);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.put('/:id', async (req, res) => {
    try {
        const instructorData = await Instructor.update(
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
        const instructorData = await Instructor.destroy({
            where: {
                id: req.params.id,
            },
        });

        if (!instructorData) {
            res.status(404).json({ message: 'No instructor found with that ID!' });
            return;
        }

        res.status(200).json({ message: 'Instructor has been deleted!' });
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
