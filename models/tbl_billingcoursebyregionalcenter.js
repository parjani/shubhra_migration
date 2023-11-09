'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tbl_billingcoursebyregionalcenter extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      tbl_billingcoursebyregionalcenter.belongsTo(models.tbl_centers, { foreignKey: 'center_id', as: 'CenterData' });
    }
  }
  tbl_billingcoursebyregionalcenter.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    billing_course_id : DataTypes.STRING,
    center_id : DataTypes.INTEGER,
    rc_new_student_fee : DataTypes.STRING,
    rc_old_student_fee : DataTypes.STRING,
    affiliate_commission_with_classroom : DataTypes.STRING,
    affiliate_commission_without_classroom : DataTypes.STRING,
    affiliate_max_discount : DataTypes.STRING,
    status : {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1
    },
    is_deleted : {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    created_at : {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
  }, {
    sequelize,
    tableName: 'tbl_billingcoursebyregionalcenter',
    modelName: 'tbl_billingcoursebyregionalcenter',
  });
  return tbl_billingcoursebyregionalcenter;
};