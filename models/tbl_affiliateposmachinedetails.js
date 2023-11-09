'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tbl_affiliateposmachinedetails extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  tbl_affiliateposmachinedetails.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    AffiliateID:{
      type: DataTypes.STRING,
      allowNull: true
    },
    MerchantStorePosCode:{
        type: DataTypes.STRING,
        allowNull: true
    },
    SecurityToken:{
      type: DataTypes.STRING,
      allowNull: true
    },
    MerchantID:{
      type: DataTypes.STRING,
      allowNull: true
    },
    IMEI:{
      type: DataTypes.STRING,
      allowNull: true
    },
    AddedOn: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
    isDeleted: DataTypes.BOOLEAN(0),
  }, {
    sequelize,
    tableName: 'tbl_AffiliatePosMachineDetails',
    modelName: 'tbl_affiliateposmachinedetails',
  });
  return tbl_affiliateposmachinedetails;
};