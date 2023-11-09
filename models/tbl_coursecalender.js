'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tbl_coursecalender extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  tbl_coursecalender.init({
    LectureID: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      CourseId : DataTypes.STRING,
      UserId : DataTypes.STRING,
      TopicName : DataTypes.STRING,
      StartDate : DataTypes.STRING,
      EndDate : DataTypes.STRING,
      StartTime : DataTypes.STRING,
      EndTime : DataTypes.STRING,
      Location : DataTypes.STRING,
      IsDeleted : {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: 0
      }

  }, {
    sequelize,
    tableName: 'tbl_CourseCalender',
    modelName: 'tbl_coursecalender',
  });
  return tbl_coursecalender;
};