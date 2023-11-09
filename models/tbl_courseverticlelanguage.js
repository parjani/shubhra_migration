'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tbl_courseverticlelanguage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  tbl_courseverticlelanguage.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    courseverticleId: DataTypes.INTEGER,
    language: DataTypes.STRING,
    positiveMark: DataTypes.INTEGER,
    negativeMark: DataTypes.INTEGER,
    required: DataTypes.BOOLEAN,
    option: { //number of options exam wise
      type: DataTypes.INTEGER,
      defaultValue: 4
    },
    status: DataTypes.BOOLEAN,
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW

    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    }
  }, {
    sequelize,
    tableName: 'tbl_courseverticlelanguages',
    modelName: 'tbl_courseverticlelanguage'
  });
  return tbl_courseverticlelanguage;
};