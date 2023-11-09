'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tbl_courselectureoutline extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  tbl_courselectureoutline.init({
    LecturePointID: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      CourseID : DataTypes.STRING,
      LectureID: DataTypes.BIGINT,
      UserID : DataTypes.STRING,
      LecturePointName : DataTypes.STRING,
      LecturePointTime : DataTypes.STRING,
      Status : {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: 1
      },
      IsDeleted : {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: 0
      },
      AddedOn : {
        type : DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        allowNull: true,
      },


  }, {
    sequelize,
    tableName: 'tbl_CourseLectureOutline',
    modelName: 'tbl_courselectureoutline',
  });
  return tbl_courselectureoutline;
};