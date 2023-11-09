'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tbl_coursemeetingcalender extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  tbl_coursemeetingcalender.init({
    id: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      CourseID : DataTypes.STRING,
      StartDate: DataTypes.DATE,
      EndDate: DataTypes.DATE,
      Isdeleted : {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: 0
      },
      AddedOn :  {
        type : DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        allowNull: true,
      },
  }, {
    sequelize,
    tableName: 'tbl_CourseMeetingCalender',
    modelName: 'tbl_coursemeetingcalender',
  });
  return tbl_coursemeetingcalender;
};