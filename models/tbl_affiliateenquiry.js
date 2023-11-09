'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tbl_affiliateenquiry extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  tbl_affiliateenquiry.init({
    EnquiryID: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    affiliateid: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    StudentName: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Email:  {
      type: DataTypes.STRING,
      allowNull: true
    },
    Mobile:  {
      type: DataTypes.STRING,
      allowNull: true
    },
    Enquiry:  {
      type: DataTypes.STRING,
      allowNull: true
    },
    AddedOn: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
    IsDeleted: DataTypes.BOOLEAN(0),
    enqstatus: {
      type: DataTypes.DATE,
      defaultValue: "Open",
    },
    
    closeremark: {
      type: DataTypes.TEXT,
      allowNull: true
    },
  }, {
    sequelize,
    tableName: 'tbl_affiliateenquiry',
    modelName: 'tbl_affiliateenquiry',
  });
  return tbl_affiliateenquiry;
};