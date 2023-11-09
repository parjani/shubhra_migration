'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tbl_courselecturesettings extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  tbl_courselecturesettings.init({
    sID: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      CourseID : DataTypes.STRING,
      CourseLectureID: DataTypes.BIGINT,
      LectureTime : DataTypes.STRING,
      AllocatedTime : DataTypes.STRING,
      
  }, {
    sequelize,
    tableName: 'tbl_CourseLectureSettings',
    modelName: 'tbl_courselecturesettings',
  });
  return tbl_courselecturesettings;
};