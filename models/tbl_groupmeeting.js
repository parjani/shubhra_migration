'use strict';
const {
  Model,
  DATE
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tbl_groupmeeting extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      tbl_groupmeeting.belongsTo(models.tbl_adminusers, {
        foreignKey: 'TeacherID',
        as: 'teacher'
      })
      tbl_groupmeeting.hasMany(models.tbl_groupmeetingcourses, {
        foreignKey: 'MeetingID',
        as: 'mappedCourses'
      })
    }
  }
  tbl_groupmeeting.init({
    MeetingID: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    TeacherID: DataTypes.STRING,
    TeacherMobile: DataTypes.STRING,
    MeetingTitle: DataTypes.STRING,
    NuStudents: DataTypes.INTEGER,
    IsCancelled: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    Description: DataTypes.STRING,
    scheduleDate: DataTypes.DATE,
    StartTime: DataTypes.STRING,
    EndTime: DataTypes.STRING,
    endDateTime: DataTypes.DATE,
    GMPassword: DataTypes.STRING,
    GMID: DataTypes.STRING,
    GMURL: DataTypes.STRING,
    MeetingType: DataTypes.STRING,
    AddeOn: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    }
  }, {
    sequelize,
    tableName: 'tbl_groupmeeting',
    modelName: 'tbl_groupmeeting'
  });
  return tbl_groupmeeting;
};