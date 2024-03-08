const Instructor = require('./instructor-model');
const Meditation = require('./meditation-model');
const UserMeditation = require('./user-meditation-model');
const User = require('./user-model');

Meditation.belongsTo(Instructor, {
    foreignKey: 'instructor_id',
});

Instructor.hasMany(Meditation, {
    foreignKey: 'meditation_id',
});

User.belongsToMany(Meditation, {
    through: UserMeditation,
});

Meditation.belongsToMany(User, {
    through: UserMeditation,
});

module.exports = { Instructor, Meditation, User, UserMeditation };
