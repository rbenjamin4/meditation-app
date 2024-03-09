const { User } = require('../models');

const userData = [
    {
        email: `silvester@hotmail.com`,
        password: `password1234`,
    },
    {
        email: `ken@gmail.com`,
        password: `MypassWord!22`,
    },
    {
        email: `barbie@aol.com`,
        password: `dreambig111`,
    },
    {
        email: `kate@aol.com`,
        password: `k1a2t3e4!`,
    },
    {
        email: `bigtimebob@aol.com`,
        password: `bobby1234`,
    },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
