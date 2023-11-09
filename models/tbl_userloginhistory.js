'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tbl_userloginhistory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  tbl_userloginhistory.init({
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    studentId: DataTypes.STRING,
    device: DataTypes.STRING,
    access_token: DataTypes.TEXT,
    type: DataTypes.STRING,
    OS: DataTypes.STRING,
    version: DataTypes.BOOLEAN,
    IPaddress: DataTypes.STRING,
    deviceId: DataTypes.STRING,
    deviceName: DataTypes.STRING,
    deviceToken: DataTypes.STRING,
    isKnox: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    userType: DataTypes.STRING,
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    }
  }, {
    sequelize,
    tableName: 'tbl_UserLoginHistory',
    modelName: 'tbl_userloginhistory'
  });
  return tbl_userloginhistory;
};