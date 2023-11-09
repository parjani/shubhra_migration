'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tbl_admissionpaymentreceipts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  tbl_admissionpaymentreceipts.init({
    AdmissionID: DataTypes.STRING,
    PaymentReceipts: DataTypes.STRING
  }, {
    sequelize,
    tableName: 'tbl_AdmissionPaymentReceipts',
    modelName: 'tbl_admissionpaymentreceipts',
  });
  return tbl_admissionpaymentreceipts;
};