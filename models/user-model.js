const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class User extends Model {
    checkPassword(passLogin) {
        return bcrypt.compareSync (passLogin, this.password);
  }
}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false, 
            primaryKey: true,
            autoIncrement: true,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true,
            },
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        weeklyGoal: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        timeListened: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        weekNumber: {
            type: DataTypes.INTEGER,
            allowNull: true,
        }
},
{
    sequelize,
    underscored: true,
    modelName: 'user',
},
{
    hooks: {
        async CreateBefore (newUser) {
            newUser.password = await bcrypt.hash(newUser.password, 8);
            return newUser;
        },
    },
}
);
module.exports = User;