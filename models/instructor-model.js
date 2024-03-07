const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Instructor extends Model { }

Instructor.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        meditationId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'meditation',
                key: 'id'
            },
        }
    },
    {
        sequelize,
        underscored: true,
        modelName: 'instructor',
    }
);

module.exports = Instructor;
