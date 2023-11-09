'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tbl_lecture extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      tbl_lecture.belongsTo(models.tbl_subjectmaster, {
          foreignKey: 'subjectID',
          as: 'subject'
        }),
        tbl_lecture.belongsTo(models.tbl_subjectmaster, {
          foreignKey: 'SubSubjectID',
          as: 'subSubject'
        }),
        // tbl_lecture.belongsTo(models.tbl_blogcategory, {foreignKey: 'CourseID', as: 'blogCategoty'}),
        tbl_lecture.belongsTo(models.tbl_adminusers, {
          foreignKey: 'UserID',
          as: 'users'
        }),
        tbl_lecture.belongsTo(models.tbl_courses, {
          foreignKey: 'CourseID',
          as: 'lectureCourse'
        })
    }
  }
  tbl_lecture.init({
    LectureID: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    subjectID: DataTypes.INTEGER,
    SubSubjectID: DataTypes.INTEGER,
    CourseID: DataTypes.STRING,
    UserID: DataTypes.STRING,
    LectureTitle: DataTypes.STRING,
    Description: DataTypes.TEXT,
    Duration: DataTypes.STRING,
    ShceduleDate: DataTypes.STRING,
    VideoFile: DataTypes.STRING,
    NumberOfFrreViews: DataTypes.STRING,
    DisplayOrder: DataTypes.INTEGER,
    ClassNotes: DataTypes.STRING,
    DisplayDays: DataTypes.STRING,
    IsTimeSpent: DataTypes.BOOLEAN(1),
    IsDeleted: DataTypes.BOOLEAN(0),
    Status: DataTypes.BOOLEAN(1),
    AddedOn: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
    IsYoutube: DataTypes.BOOLEAN(0),
    ShowTime: DataTypes.BOOLEAN(1),
    posterurl: DataTypes.STRING,
    AllocatedTime: DataTypes.INTEGER,
  }, {
    sequelize,
    tableName: 'tbl_Lecture',
    modelName: 'tbl_lecture',
  });
  return tbl_lecture;
};