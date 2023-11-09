'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tbl_userloguthistory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  tbl_userloguthistory.init({
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
    version: DataTypes.STRING,
    IPaddress: DataTypes.STRING,
    deviceId: DataTypes.STRING,
    deviceName: DataTypes.STRING,
    isKnox : {
      type : DataTypes.BOOLEAN,
      allowNull : false,
      defaultValue : 0
    },
    userType: DataTypes.STRING,
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    }
  }, {
    sequelize,
    tableName: 'tbl_userloguthistory',
    modelName: 'tbl_userloguthistory'
  });
  return tbl_userloguthistory;
};