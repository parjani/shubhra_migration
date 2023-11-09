'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tbl_livelecturechannels extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  tbl_livelecturechannels.init({
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    name: DataTypes.STRING,
    slug: DataTypes.STRING,
    link: DataTypes.STRING,
    status: {
      type: DataTypes.BOOLEAN,
      defaultValue: 1
    },
    type: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'tbl_livelecturechannels',
  });
  return tbl_livelecturechannels;
};