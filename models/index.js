const Instructor = require('./instructor-model');
const Meditation = require('./meditation-model');
const User = require('./user-model');

Meditation.belongsTo(Instructor, {
    foreignKey: 'instructorId',
});

Instructor.hasMany(Meditation, {
    foreignKey: 'instructorId',
});

User.hasMany(Meditation, {
    foreignKey: 'meditationId',
});

Meditation.belongsToMany(User, {
    foreignKey: 'meditationId',
});