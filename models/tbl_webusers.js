'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tbl_webusers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      tbl_webusers.hasMany(models.tbl_BillingTransactions, {
        foreignKey: 'StudentID',
        as: 'BillingCourses'
      })
    }
  }
  tbl_webusers.init({
    UserID: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false
    },
    UID: DataTypes.INTEGER,
    GUID: DataTypes.STRING,
    FUID: DataTypes.STRING,
    FirstName: DataTypes.STRING,
    MiddleName: DataTypes.STRING,
    LastName: DataTypes.STRING,
    EmailID: DataTypes.STRING,
    Mobile: DataTypes.STRING,
    EmergencyContactNo: DataTypes.STRING,
    Education: DataTypes.STRING,
    IDProof: DataTypes.STRING,
    IDPhoto: DataTypes.STRING,
    PHouseNo: DataTypes.STRING,
    PStreet: DataTypes.STRING,
    PLandmark: DataTypes.STRING,
    PCity: DataTypes.STRING,
    PState: DataTypes.STRING,
    PZipCode: DataTypes.STRING,
    THouseNo: DataTypes.STRING,
    TStreet: DataTypes.STRING,
    TLandmark: DataTypes.STRING,
    TCity: DataTypes.STRING,
    TState: DataTypes.STRING,
    TZipCode: DataTypes.STRING,
    Status: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1
    },
    IsDeleted: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    AddedOn: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
    mdevice: DataTypes.STRING,
    mobkey: DataTypes.STRING,
    IDProofBack: DataTypes.STRING,
    password: DataTypes.STRING,
    signupType: DataTypes.ENUM("normal", "social"),
    Gender: DataTypes.ENUM("male", "female"),
    emailOTP: DataTypes.INTEGER,
    mobileOTP: DataTypes.INTEGER,
    emailVerified: DataTypes.BOOLEAN,
    mobileVerified: DataTypes.BOOLEAN,
    examId: DataTypes.INTEGER,
    socialId: DataTypes.STRING,
    resetPasswordLinkExpiry: DataTypes.DATE,
    ProfileImage: DataTypes.STRING,
    addressProof: DataTypes.STRING,
    fcmUid: DataTypes.STRING
  }, {
    sequelize,
    tableName: 'tbl_WebUserS',
    modelName: 'tbl_webusers',
  });
  return tbl_webusers;
};