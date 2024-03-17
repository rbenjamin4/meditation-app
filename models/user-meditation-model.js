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
        dateTime: {
            type: DataTypes.DATE,
            allowNull: false,
            //update when they clicked, order last clicked time descending
            //querying user-meditations where userID = userID
            //last three clicked, controller gets that from model, front end displays
        },

        // number of mins user has listened
        // Date

        // add date /time column
        // when they click, send to controller
        // order them by last clicked time
    },
    {
        sequelize,
        underscored: true,
        modelName: 'user_meditation',
    }
);

module.exports = UserMeditation;
