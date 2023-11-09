'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tbl_admissionremarks extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  tbl_admissionremarks.init({
    RemarkID: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    AdmissionID: DataTypes.INTEGER,
    InstallmentID: DataTypes.INTEGER(0),
    AffiliateID: DataTypes.INTEGER,
    Remark: DataTypes.STRING,
    RemarkStatus: DataTypes.STRING,
    AddedOn : {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
    LastUpdated:{
      type: DataTypes.DATE
    },
}, {
    sequelize,
    tableName: 'tbl_AdmissionRemarks',
    modelName: 'tbl_admissionremarks',
  });
  return tbl_admissionremarks;
};