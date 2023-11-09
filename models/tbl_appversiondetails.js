'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tbl_appversiondetails extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  tbl_appversiondetails.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    version: DataTypes.STRING(50),
    versioncode: DataTypes.STRING(50),
    IsCurrent:DataTypes.CHAR(1),
    addedon: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
  }, {
    sequelize,
    tableName: 'tbl_AppVersionDetails',
    modelName: 'tbl_appversiondetails',
  });
  return tbl_appversiondetails;
};