'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tbl_gpsexpaccess extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  tbl_gpsexpaccess.init({
    ID: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    CourseID: DataTypes.STRING,
    StudentID: DataTypes.STRING,
    EmailID: DataTypes.STRING,
    AddedOn: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    }
  }, {
    sequelize,
    tableName: 'tbl_GPSExpAccess',
    modelName: 'tbl_gpsexpaccess',
  });
  return tbl_gpsexpaccess;
};