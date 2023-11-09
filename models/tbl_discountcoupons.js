'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tbl_discountcoupons extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      tbl_discountcoupons.belongsTo(models.tbl_billingcources, {foreignKey: 'courseid', as: 'CourseData'})
      // define association here
    }
  }
  tbl_discountcoupons.init({
    couponid: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    couponcode: DataTypes.STRING,
    coupondesc: DataTypes.STRING,
    startdate: DataTypes.STRING,
    enddate: DataTypes.STRING,
    discountamount: DataTypes.INTEGER,
    emailid: DataTypes.STRING,
    courseid: DataTypes.STRING,
    referredby: DataTypes.STRING,
    isused: {
      type: DataTypes.STRING,
      defaultValue: "N",
    },
    usedon: DataTypes.DATE,
    isdeleted: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    isactive : {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1
    },
    addedon: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
  }, {
    sequelize,
    tableName: 'tbl_DiscountCoupons',
    modelName: 'tbl_discountcoupons',
  });
  return tbl_discountcoupons;
};