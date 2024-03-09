const seedInstructors = require('./instructor-seed-data');
const seedMeditations = require('./meditation-seed-data');
const seedUsers = require('./user-seed-data');

const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');
  
    await seedInstructors();
    console.log('\n----- INSTRUCTORS SEEDED -----\n');
  
    await seedMeditations();
    console.log('\n----- MEDITATIONS SEEDED -----\n');
  
    await seedUsers();
    console.log('\n----- USERS SEEDED -----\n');
  
    process.exit(0);
  };
  
  seedAll();
  