'use strict';
const { NULL } = require('node-sass');
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tbl_adminpasswordresetrequest extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  tbl_adminpasswordresetrequest.init({
    reqid: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    adminid: DataTypes.STRING,
    reqdate: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
    },
    reqkey :DataTypes.STRING,
    iscomplete : DataTypes.BOOLEAN(0),
    completiondate : {
      type: DataTypes.DATE
      },
  }, {
    sequelize,
    tableName: 'tbl_AdminPasswordResetRequest',
    modelName: 'tbl_adminpasswordresetrequest',
  });
  return tbl_adminpasswordresetrequest;
};