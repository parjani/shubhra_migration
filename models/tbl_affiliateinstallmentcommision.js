'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tbl_affiliateinstallmentcommision extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  tbl_affiliateinstallmentcommision.init({
    commissionid: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    affiliateid: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    admissionid: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    badmissionid: {
      type: DataTypes.STRING,
      allowNull: true
    },
    coursefees: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    TVWithoutDiscount: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    OldStdDiscount: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    discount: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    DiscountTV: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    NetTaxableValue: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    CGST: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    SGST: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    IGST: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    TabletCost: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    SRIASAmount: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    cpercentage: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    camount: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    admissiondate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ispaid: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    paiddate: {
      type: DataTypes.DATE,
      allowNull: true
    },
  }, {
    sequelize,
    tableName: 'tbl_AffiliateInstallmentCommision',
    modelName: 'tbl_affiliateinstallmentcommision',
  });
  return tbl_affiliateinstallmentcommision;
};