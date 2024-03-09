const sequelize = require('../config/connection');
const { Instructor, Meditation, UserMeditation, User } = require('../models');

const instructorSeedData = require('./instructor-seed-data.json');
const meditationSeedData = require('./meditation-seed-data.json');
const userSeedData = require('./user-seed-data.json');

