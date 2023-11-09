'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tbl_affiliatecommissionnew extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  tbl_affiliatecommissionnew.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    BTransactionID: DataTypes.INTEGER,
    AffiliateID: DataTypes.INTEGER,
    AdmissionID: DataTypes.INTEGER,
    CAmount: DataTypes.DECIMAL(18,2),
    addedon: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
  }, {
    sequelize,
    tableName: 'tbl_AffiliateCommissionNew',
    modelName: 'tbl_affiliatecommissionnew',
  });
  return tbl_affiliatecommissionnew;
};