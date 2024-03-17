const { Meditation } = require('../models');

const meditationData = [
    {
        title: `Meditation for Deep Sleep`,
        duration: 30,
        description: `Some info about the meditation`,
        instructorId: 1,
        fileName: `Track1.mp3`
    },
    {
        title: `Morning Meditation for Clarity`,
        duration: 10,
        description: `Some info about the meditation`,
        instructorId: 2,
        fileName: `Track2.mp3`
    },
    {
        title: `Grounding Meditation`,
        duration: 15,
        description: `Some info about the meditation`,
        instructorId: 3,
        fileName: `Track3.mp3`
    },
    {
        title: `Midday Reset`,
        duration: 5,
        description: `Some info about the meditation`,
        instructorId: 4,
        fileName: `Track4.mp3`
    },
    {
        title: `Meditation for Self-Trust`,
        duration: 10,
        description: `Some info about the meditation`,
        instructorId: 5,
        fileName: `Track5.mp3`
    }
];

const seedMeditations = () => Meditation.bulkCreate(meditationData);

module.exports = seedMeditations;
