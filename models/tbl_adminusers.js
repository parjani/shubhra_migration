'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tbl_adminusers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      tbl_adminusers.belongsTo(models.tbl_centers, {
        foreignKey: 'center_id',
        as: 'centerDetail'
      });

      tbl_adminusers.belongsTo(models.tbl_usertypes, {
        foreignKey: 'UserTypeID',
        as: 'usersType'
      });

      tbl_adminusers.hasMany(models.tbl_admincoursetypes, {
        foreignKey: 'userId',
        as: 'courseTypes'
      });

      tbl_adminusers.hasMany(models.tbl_adminvideoeditortype, {
        foreignKey: 'userId',
        as: 'videoEditorTypes'
      });

      tbl_adminusers.hasMany(models.tbl_billingcources, {
        foreignKey: 'CourseTeacher',
        as: 'teacherCourses'
      });
      tbl_adminusers.hasMany(models.tbl_articles, {
        foreignKey: 'TeacherID',
        as: 'teacherArticles'
      });

      tbl_adminusers.hasMany(models.tbl_lecture, {
        foreignKey: 'UserID',
        as: 'teacherLectures'
      });

      tbl_adminusers.hasMany(models.tbl_teachercenters, {
        foreignKey: 'faculty_id',
        as: 'teacherCenters'
      });

      tbl_adminusers.hasMany(models.tbl_teachersubject, {
        foreignKey: 'faculty_id',
        as: 'teacherSubjects'
      });

    }
  }
  tbl_adminusers.init({
    UserID: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false
    },
    UserTypeID: DataTypes.INTEGER,
    FirstName: DataTypes.STRING,
    LastName: DataTypes.STRING,
    ProfilePic: DataTypes.STRING,
    video: DataTypes.STRING,
    videoId: DataTypes.INTEGER,
    is_youtube: DataTypes.INTEGER,
    EmailID: DataTypes.STRING,
    UserName: DataTypes.STRING,
    Password: DataTypes.STRING,
    Mobile: DataTypes.STRING,
    Phone: DataTypes.STRING,
    Address: DataTypes.STRING,
    City: DataTypes.STRING,
    State: DataTypes.STRING,
    ZipCode: DataTypes.STRING,
    Status: DataTypes.BOOLEAN,
    IsDeleted: DataTypes.BOOLEAN,
    AddedOn: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
    Description: DataTypes.STRING,
    Education: DataTypes.STRING,
    Center: DataTypes.STRING,
    center_id: DataTypes.INTEGER,
    Times: DataTypes.STRING,
    teacherIntro: DataTypes.STRING,
    courseCategoryId: {
      type: DataTypes.BIGINT,
      defaultValue: null
    }
  }, {
    sequelize,
    tableName: 'tbl_AdminUsers',
    modelName: 'tbl_adminusers',
  });
  return tbl_adminusers;
};