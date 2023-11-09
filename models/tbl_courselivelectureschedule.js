'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tbl_courselivelectureschedule extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      tbl_courselivelectureschedule.hasMany(models.tbl_livelectureschedulecoursemapping, {
        foreignKey: 'liveLectureID',
        as: 'liveCourses'
      })
      tbl_courselivelectureschedule.belongsTo(models.tbl_adminusers, {
        foreignKey: 'TeacherID',
        as: 'teacher'
      })
      tbl_courselivelectureschedule.belongsTo(models.tbl_livelecturechannels, {
        foreignKey: 'ClassRoom',
        as: 'channel'
      })
    }
  }
  tbl_courselivelectureschedule.init({
    liveLectureID: {
      type: DataTypes.STRING,
      autoIncrement: false,
      primaryKey: true,
      allowNull: false
    },
    CourseID: DataTypes.STRING,
    LectureTitle: DataTypes.STRING,
    LectureDescription: DataTypes.STRING,
    TeacherID: DataTypes.STRING,
    ScheduleDate: DataTypes.DATE,
    StartTime: DataTypes.STRING,
    EndTime: DataTypes.STRING,
    endDateTime: DataTypes.DATE,
    ClassRoom: DataTypes.STRING,
    AddedOn: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      allowNull: true,
    },
    Isdeleted: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    ChatStatus: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "N"
    }

  }, {
    sequelize,
    tableName: 'tbl_courselivelectureschedule',
    modelName: 'tbl_courselivelectureschedule',
  });
  return tbl_courselivelectureschedule;
};