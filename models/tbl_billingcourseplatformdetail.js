'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tbl_billingcourseplatformdetail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  tbl_billingcourseplatformdetail.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    billing_course_id: DataTypes.STRING,
    platform : DataTypes.ENUM('Classroom', 'Tablet', 'Website', 'Mobile'),
    type : DataTypes.ENUM('Online', 'Offline'),
    detail : DataTypes.STRING,
    status : {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1
    },
    created_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    }
  }, {
    sequelize,
    tableName: 'tbl_billingcourseplatformdetail',
    modelName: 'tbl_billingcourseplatformdetail',
  });
  return tbl_billingcourseplatformdetail;
};