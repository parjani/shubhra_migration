'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tbl_checkuserlicensesetting extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  tbl_checkuserlicensesetting.init({
    userid: { 
     type: DataTypes.STRING(100),
     allowNull: true
    },
    checklicense: DataTypes.STRING, 
    updatedon: {
      type : DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      allowNull: true,
    },
  }, {
    sequelize,
    tableName: 'tbl_CheckUserLicenseSetting',
    modelName: 'tbl_checkuserlicensesetting',
  });
  return tbl_checkuserlicensesetting;
};