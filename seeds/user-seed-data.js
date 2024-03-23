const { User } = require('../models');

const userData = [
    {
        email: `silvester@hotmail.com`,
        password: `password1234`,
        firstName: `Casey`,
        lastName: `Newman`
    },
    {
        email: `ken@gmail.com`,
        password: `MypassWord!22`,
        firstName: `Reed`,
        lastName: `Benjamin`
    },
    {
        email: `barbie@aol.com`,
        password: `dreambig111`,
        firstName: `Joe`,
        lastName: `Smith`
    },
    {
        email: `kate@aol.com`,
        password: `k1a2t3e4!`,
        firstName: `Kate`,
        lastName: `Winslet`
    },
    {
        email: `bigtimebob@aol.com`,
        password: `bobby1234`,
        firstName: `Michael`,
        lastName: `Jordan`
    },
];

const seedUsers = () => User.bulkCreate(userData, {
    individualHooks:true
});

module.exports = seedUsers;
