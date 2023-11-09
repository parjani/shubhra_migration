'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tbl_billingaddonaccesscomment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  tbl_billingaddonaccesscomment.init({
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    billingtransactionaddonId: DataTypes.BIGINT,
    course_id: DataTypes.STRING,
    student_id: DataTypes.STRING,
    accessType: {
      type: DataTypes.BOOLEAN,
      defaultValue: 1
    },
    comment: DataTypes.STRING,
    AddedOn: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    }
  }, {
    sequelize,
    tableName: 'tbl_billingaddonaccesscomments',
    modelName: 'tbl_billingaddonaccesscomment',
  });
  return tbl_billingaddonaccesscomment;
};