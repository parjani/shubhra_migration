'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tbl_coursementors extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  tbl_coursementors.init({
    CourseID: DataTypes.STRING,
    MentorID: DataTypes.STRING,
    AssignedOn: DataTypes.DATE,
  }, {
    sequelize,
    tableName: 'tbl_CourseMentors',
    modelName: 'tbl_coursementors',
  });
  return tbl_coursementors;
};