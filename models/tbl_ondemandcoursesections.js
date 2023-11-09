'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tbl_ondemandcoursesections extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  tbl_ondemandcoursesections.init({
    sectionID: {
      type :  DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    CourseID : DataTypes.STRING,
    sectionTitle : DataTypes.STRING,
    description : DataTypes.TEXT,
    isDeleted : {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    modelName: 'tbl_ondemandcoursesections',
  });
  return tbl_ondemandcoursesections;
};