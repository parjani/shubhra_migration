'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tbl_courseadmintesttypes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  tbl_courseadmintesttypes.init({
    courseadminid: DataTypes.STRING,
    testtypeid: DataTypes.INTEGER
  }, {
    sequelize,
    tableName: 'tbl_CourseAdminTestTypes',
    modelName: 'tbl_courseadmintesttypes',
  });
  return tbl_courseadmintesttypes;
};