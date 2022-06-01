const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Category extends Model {}

Category.init(
  {
    // define columns
  },
  {
    // Link to database connection
    sequelize,
    // set the false to remove the 'created_at' and 'updated_at' fields 
    timestamps: false,
    freezeTableName: true,

    // to convert the camel case to underscored 
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;
