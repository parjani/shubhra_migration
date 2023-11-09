'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tbl_adminevaluationscanupload extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  tbl_adminevaluationscanupload.init({
    SectionTestID: DataTypes.STRING,
    CourseID: DataTypes.STRING,
    UserID: DataTypes.STRING,
    AddedOn: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
  }, {
    sequelize,
    tableName: 'tbl_AdminEvaluationScanUpload',
    modelName: 'tbl_adminevaluationscanupload',
  });
  return tbl_adminevaluationscanupload;
};