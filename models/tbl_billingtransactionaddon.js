'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tbl_billingtransactionaddon extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      tbl_billingtransactionaddon.belongsTo(models.tbl_courses, {
        foreignKey: "course_id",
        as: "course"
      })
      tbl_billingtransactionaddon.belongsTo(models.tbl_webusers, {
        foreignKey: "student_id",
        as: "user"
      })


    }
  }
  tbl_billingtransactionaddon.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    order_id: DataTypes.STRING,
    billing_transaction_id: DataTypes.INTEGER,
    student_id: DataTypes.STRING,
    course_id: DataTypes.STRING,
    billing_course_id: DataTypes.STRING,
    addon_id: DataTypes.INTEGER,
    addon_name: DataTypes.STRING,
    addon_fee: DataTypes.DECIMAL(10, 2),
    course_category: DataTypes.INTEGER,
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1
    },
    txnStatus: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    freeAddonOfferedByAdmin: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    isDefaultCourse: { //1=>when assigned during signup,2=>assigned by admin
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    isDefaultCourseActive: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    created_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    }
  }, {
    sequelize,
    tableName: 'tbl_billingtransactionaddon',
    modelName: 'tbl_billingtransactionaddon',
  });
  return tbl_billingtransactionaddon;
};