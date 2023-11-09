'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tbl_homebanner extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  tbl_homebanner.init({
    bannerid: {
      type :  DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    bannertitle: DataTypes.STRING,
    descriptionOne : DataTypes.STRING,
    descriptionTwo : DataTypes.STRING,
    bannerfile: DataTypes.STRING,
    bannerurl: DataTypes.STRING,
    urltarget: DataTypes.STRING,
    impressions: DataTypes.INTEGER,
    clicks: DataTypes.INTEGER,
    displayorder: DataTypes.INTEGER,
    isactive: DataTypes.BOOLEAN,
    isdeleted: DataTypes.BOOLEAN,
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
  }, {
    sequelize,
    tableName: 'tbl_HomeBanner',
    modelName: 'tbl_homebanner',
  });
  return tbl_homebanner;
};