'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tbl_exceptionallectureaccess extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  tbl_exceptionallectureaccess.init({
    ID: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    CourseID: DataTypes.STRING,
    LectureID: DataTypes.STRING,
    StudentID: DataTypes.STRING,
    ScheduleDate: DataTypes.DATE,
    EndDate: DataTypes.DATE,
    AddedOn: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    }
  }, {
    sequelize,
    tableName: 'tbl_exceptionallectureaccess',
    modelName: 'tbl_exceptionallectureaccess',
  });
  return tbl_exceptionallectureaccess;
};