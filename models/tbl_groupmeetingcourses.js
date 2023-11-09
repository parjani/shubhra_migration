'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tbl_groupmeetingcourses extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      tbl_groupmeetingcourses.belongsTo(models.tbl_courses, {
        foreignKey: 'CourseID',
        as: 'courseDetails'
      })
    }
  }
  tbl_groupmeetingcourses.init({
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    MeetingID: DataTypes.BIGINT,
    CourseID: DataTypes.STRING
  }, {
    sequelize,
    tableName: 'tbl_GroupMeetingCourses',
    modelName: 'tbl_groupmeetingcourses',
  });

  return tbl_groupmeetingcourses;
};