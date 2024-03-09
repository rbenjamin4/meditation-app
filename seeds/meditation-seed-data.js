const { Meditation } = require('../models');

const meditationData = [
    {
        title: `Meditation for Deep Sleep`,
        duration: 30,
        description: `Some info about the meditation`,
    },
    {
        title: `Morning Meditation for Clarity`,
        duration: 10,
        description: `Some info about the meditation`,
    },
    {
        title: `Grounding Meditation`,
        duration: 15,
        description: `Some info about the meditation`,
    },
    {
        title: `Midday Reset`,
        duration: 5,
        description: `Some info about the meditation`,
    },
    {
        title: `Meditation for Self-Trust`,
        duration: 10,
        description: `Some info about the meditation`,
    }
];

const seedMeditations = () => Meditation.bulkCreate(meditationData);

module.exports = seedMeditations;
