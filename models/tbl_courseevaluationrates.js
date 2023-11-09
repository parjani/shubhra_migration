'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tbl_courseevaluationrates extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  tbl_courseevaluationrates.init({
    rateid:  {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      courseid : DataTypes.STRING,
      MainsAGrade : DataTypes.DECIMAL(18,2),
      MainsBGrade : DataTypes.DECIMAL(18,2),
      PSIRMainsCrashAGrade: DataTypes.DECIMAL(18,2),
      PSIRMainsCrashBGrade: DataTypes.DECIMAL(18,2),
      PSIRSectionalAGrade: DataTypes.DECIMAL(18,2),
      PSIRSectionalBGrade: DataTypes.DECIMAL(18,2),
  }, {
    sequelize,
    tableName: 'tbl_CourseEvaluationRates',
    modelName: 'tbl_courseevaluationrates',
  });
  return tbl_courseevaluationrates;
};