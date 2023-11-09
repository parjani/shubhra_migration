'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tbl_courseadminsubjects extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  tbl_courseadminsubjects.init({
    courseadminid: DataTypes.STRING,
    subjectid: DataTypes.INTEGER
  }, {
    sequelize,
    tableName: 'tbl_courseadminsubjects',
    modelName: 'tbl_courseadminsubjects',
  });
  tbl_courseadminsubjects.removeAttribute('id');
  return tbl_courseadminsubjects;
};