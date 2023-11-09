'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tbl_affiliatesubscriptions extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  tbl_affiliatesubscriptions.init({
    sid: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    affiliateid: DataTypes.INTEGER,
    affiliatecode: DataTypes.STRING(50),
    studentid: DataTypes.STRING(100),
    admissionid: DataTypes.STRING(100),
    addedon: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
    BTransactionID: {
      type: DataTypes.INTEGER,
      allowNull: true,
     },
    AffAdmissionID: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  }, {
    sequelize,
    tableName: 'tbl_AffiliateSubscriptions',
    modelName: 'tbl_affiliatesubscriptions',
  });
  return tbl_affiliatesubscriptions;
};