const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Instructor extends Model {}

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
  },
  {
    sequelize,
    underscored: true,
    modelName: 'instructor',
  }
);

module.exports = Instructor;
