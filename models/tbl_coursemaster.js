'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tbl_coursemaster extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  tbl_coursemaster.init({
    courseid: DataTypes.STRING,
    mastercourseid: DataTypes.STRING
  }, {
    sequelize,
    tableName: 'tbl_CourseMaster',
    modelName: 'tbl_coursemaster',
  });
  return tbl_coursemaster;
};