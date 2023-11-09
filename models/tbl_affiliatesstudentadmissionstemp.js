'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tbl_affiliatesstudentadmissionstemp extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  tbl_affiliatesstudentadmissionstemp.init({
    TempAdmissionID: {
      type: DataTypes.STRING,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    AffiliateID: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    CourseID: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    EmailID: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
  }, {
    sequelize,
    tableName: 'tbl_AffiliatesStudentAdmissionsTemp',
    modelName: 'tbl_affiliatesstudentadmissionstemp',
  });
  return tbl_affiliatesstudentadmissionstemp;
};