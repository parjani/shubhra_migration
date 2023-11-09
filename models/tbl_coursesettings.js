'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tbl_coursesettings extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  tbl_coursesettings.init({
    CourseID : DataTypes.STRING,
    CLTime : DataTypes.STRING,
    IsAlwaysShow : {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1
    },
    IsHindi : {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: 0
    },
    ismastercourse : {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: 0
    },
    GPS : DataTypes.STRING,
  }, {
    sequelize,
    tableName: 'tbl_CourseSettings',
    modelName: 'tbl_coursesettings',
  });
  return tbl_coursesettings;
};