'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tbl_coursebatches extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  tbl_coursebatches.init({
    BatchID: {
      type: DataTypes.STRING(100),
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    CourseID: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    BatchTitle: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    BatchTiming: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    CenterID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    StartDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    EndDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Status: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    AddedOn: {
      type: DataTypes.DATE,
      allowNull: true
    },
  }, {
    sequelize,
    tableName: 'tbl_CourseBatches',
    modelName: 'tbl_coursebatches',
  });
  return tbl_coursebatches;
};