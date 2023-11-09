'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tbl_affiliatecomission extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  tbl_affiliatecomission.init({
    commissionid: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    affiliateid: DataTypes.INTEGER,
    admissionid: DataTypes.INTEGER,
    badmissionid: DataTypes.STRING,
    coursefees: DataTypes.DECIMAL(18,2),
    TVWithoutDiscount: DataTypes.DECIMAL(18,2),
    OldStdDiscount: DataTypes.DECIMAL(18,2),
    discount: DataTypes.DECIMAL(18,2),
    DiscountTV: DataTypes.DECIMAL(18,2),
    NetTaxableValue: DataTypes.DECIMAL(18,2),
    CGST: DataTypes.DECIMAL(18,2),
    SGST: DataTypes.DECIMAL(18,2),
    IGST: DataTypes.DECIMAL(18,2),
    TabletCost: DataTypes.DECIMAL(18,2),
    SRIASAmount: DataTypes.DECIMAL(18,2),
    cpercentage: DataTypes.DECIMAL(18,2),
    camount: DataTypes.DECIMAL(18,2),
    admissiondate: {
      type: DataTypes.DATE
      },
    ispaid: DataTypes.BOOLEAN(0),
    paiddate :{
      type: DataTypes.DATE
      },
  }, {
    sequelize,
    tableName: 'tbl_affiliatecomission',
    modelName: 'tbl_affiliatecomission',
  });
  return tbl_affiliatecomission;
};