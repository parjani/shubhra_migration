'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tbl_courseteacher extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  tbl_courseteacher.init({
    CourseID : DataTypes.STRING,
    TeacherID : DataTypes.INTEGER,
  }, {
    sequelize,
    tableName: 'tbl_CourseTeacher',
    modelName: 'tbl_courseteacher',
  });
  return tbl_courseteacher;
};