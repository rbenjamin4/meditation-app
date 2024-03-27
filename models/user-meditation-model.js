const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class UserMeditation extends Model { }

UserMeditation.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        userId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id',
            }
        },
        meditationId: {
            type: DataTypes.STRING,
            references: {
                model: 'meditation',
                key: 'id',
            }
        },
    },
    {
        sequelize,
        underscored: true,
        modelName: 'user_meditation',
    }
);

module.exports = UserMeditation;
