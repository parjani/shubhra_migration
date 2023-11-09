'use strict';
const {
  Model, DATE
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tbl_affiliateinvoices extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  tbl_affiliateinvoices.init({
    Invid: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    affiliateid:DataTypes.INTEGER,
    month: DataTypes.INTEGER,
    year: DataTypes.INTEGER,
    financialyear: DataTypes.STRING,
    invoiceno: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    comamount: DataTypes.DECIMAL(18,2),
    CGST: DataTypes.DECIMAL(18,2),
    SGST: DataTypes.DECIMAL(18,2),
    IGST: DataTypes.DECIMAL(18,2),
    billamount: DataTypes.DECIMAL(18,2),
    invfile: DataTypes.STRING,
    addedon: {
      type: DataTypes.DATE,
      allowNull: false
    },
    ispaid: DataTypes.BOOLEAN(0),
    paiddate:{
      type: DataTypes.DATE,
      allowNull: true
    },
}, {
    sequelize,
    tableName: 'tbl_affiliateinvoices',
    modelName: 'tbl_affiliateinvoices',
  });
  return tbl_affiliateinvoices;
};