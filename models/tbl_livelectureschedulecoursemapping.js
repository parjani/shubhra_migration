'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tbl_livelectureschedulecoursemapping extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      tbl_livelectureschedulecoursemapping.belongsTo(models.tbl_courses, {
        foreignKey: 'CourseID',
        as: 'courseDetails'
      })

    }
  }
  tbl_livelectureschedulecoursemapping.init({
    liveLectureID: DataTypes.STRING,
    CourseID: DataTypes.STRING
  }, {
    sequelize,
    tableName: 'tbl_LiveLectureScheduleCourseMapping',
    modelName: 'tbl_livelectureschedulecoursemapping',
  });
  tbl_livelectureschedulecoursemapping.removeAttribute('id');
  return tbl_livelectureschedulecoursemapping;
};