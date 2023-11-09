'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tbl_affiliatecourses extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  tbl_affiliatecourses.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    courseid: DataTypes.STRING,
    weeklyview: DataTypes.BOOLEAN(1),
    subjectview: DataTypes.BOOLEAN(1),
    addedon: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
  }, {
    sequelize,
    tableName: 'tbl_affiliatecourses',
    modelName: 'tbl_affiliatecourses',
  });
  return tbl_affiliatecourses;
};