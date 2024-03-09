const sequelize = require('../config/connection');
const { Instructor, Meditation, UserMeditation, User } = require('../models');

const instructorSeedData = require('./instructor-seed-data');
const meditationSeedData = require('./meditation-seed-data');
const userSeedData = require('./user-seed-data');

