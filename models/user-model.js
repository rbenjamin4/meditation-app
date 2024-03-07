const { Model } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('./config/connection');

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
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            validate:{
            len: [8],
            },
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
            validate:{
                len: [8],
            },
        },
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