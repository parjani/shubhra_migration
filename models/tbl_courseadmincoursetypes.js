'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tbl_courseadmincoursetypes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  tbl_courseadmincoursetypes.init({
    courseadminid: DataTypes.STRING,
    coursetypeid: DataTypes.INTEGER,
  }, {
    sequelize,
    tableName: 'tbl_courseadmincoursetypes',
    modelName: 'tbl_courseadmincoursetypes',
  });
  return tbl_courseadmincoursetypes;
};