'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tbl_coursetestseries extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  tbl_coursetestseries.init({
    CTestSeriesID : {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false
      },
    CTestSeriesTitle : DataTypes.STRING,
    CourseInfo : DataTypes.TEXT,
    StartDate : DataTypes.DATE,
    EndDate : DataTypes.DATE,
    CoursePDF : DataTypes.STRING,
    Status : {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: 1
      },
      IsDeleted : {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: 0
      }
  }, {
    sequelize,
    tableName: 'tbl_CourseTestSeries',
    modelName: 'tbl_coursetestseries',
  });
  return tbl_coursetestseries;
};