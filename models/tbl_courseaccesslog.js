'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tbl_courseaccesslog extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  tbl_courseaccesslog.init({
    LogID: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    AdminID: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    StudentID: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    CourseID: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    BillingCourseID: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    LogType: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    IpAddress: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    AddedOn:{
      type : DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      allowNull: true,
    },
  }, {
    sequelize,
    tableName: 'tbl_CourseAccessLog',
    modelName: 'tbl_courseaccesslog',
  });
  return tbl_courseaccesslog;
};