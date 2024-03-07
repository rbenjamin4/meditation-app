const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Meditation extends Model { }

Meditation.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        duration: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        instructorId: {
            type: DataTypes.STRING,
            allowNull: false,
            references: {
                model: 'instructor',
                key: 'id'
            },
        },
    },
    {
        sequelize,
        underscored: true,
        modelName: 'meditation',
    }
);

module.exports = Meditation;
