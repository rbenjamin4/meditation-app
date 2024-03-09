const { Instructor } = require('../models');

const instructorData = [
    {
        name: 'Todd',
    },
    {
        name: 'Shmuckers',
    },
    {
        name: 'Lucy',
    },
    {
        name: 'Leonardo DiCaprio',
    },
    {
        name: 'Another Name',
    },
];

const seedInstructors = () => Instructor.bulkCreate(instructorData);

module.exports = seedInstructors;
