'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tbl_courselectures extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      tbl_courselectures.belongsTo(models.tbl_lecture, {
        foreignKey: 'lectureid',
        as: 'LectureDetail'
      }),
      tbl_courselectures.belongsTo(models.tbl_courses, {
        foreignKey: 'courseid',
        as: 'CourseData'
      })

    }
  }
  tbl_courselectures.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    courseid : DataTypes.STRING,
    lectureid : DataTypes.INTEGER,  
    subjectid : DataTypes.INTEGER,
    subsubjectid : DataTypes.INTEGER,
    lecturetitle : DataTypes.STRING,
    scheduledate : DataTypes.STRING,
    dateScheduled : DataTypes.DATE,
    lectureenddate : DataTypes.DATE,
    istimespent : DataTypes.INTEGER,
    displaydays : DataTypes.STRING,
    showtime : DataTypes.INTEGER,
    duration : DataTypes.INTEGER,
    displayorder : DataTypes.INTEGER,
    lecturetime : DataTypes.STRING,
    AllocatedTime : DataTypes.STRING,
    lectstatus : {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1
    },
    isdeleted : {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    addedon : {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
    section_id : DataTypes.STRING
  }, {
    sequelize,
    tableName: 'tbl_courselectures',
    modelName: 'tbl_courselectures',
  });
  return tbl_courselectures;
};