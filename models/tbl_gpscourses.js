'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tbl_gpscourses extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      tbl_gpscourses.belongsTo(models.tbl_courses, { foreignKey: 'CourseID', as: 'CourseDetail' })
    }
  }
  tbl_gpscourses.init({
    ID: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    CourseID: DataTypes.STRING,
    Latitude: DataTypes.STRING,
    Longitude: DataTypes.STRING,
    IsGPS: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    isdeleted: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    Radius: DataTypes.INTEGER,
    AddedOn: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    }
  }, {
    sequelize,
    tableName: 'tbl_GPSCourses',
    modelName: 'tbl_gpscourses',
  });
  return tbl_gpscourses;
};