'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tbl_testimonials extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  tbl_testimonials.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    title : DataTypes.STRING,
    description : DataTypes.TEXT,
    studentName : DataTypes.STRING,
    studentImage : DataTypes.STRING,
    media : DataTypes.STRING,
    yearOfStudy : DataTypes.INTEGER,
    centerOfStudy : DataTypes.INTEGER,
    status: DataTypes.BOOLEAN(1),
    isdeleted: DataTypes.BOOLEAN(0),
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
  }, {
    sequelize,
    tableName: 'tbl_testimonials',
    modelName: 'tbl_testimonials',
  });
  return tbl_testimonials;
};