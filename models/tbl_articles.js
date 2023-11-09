'use strict';
const Teacher = require('../models/tbl_adminusers');
const {
  Model, BOOLEAN
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tbl_articles extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      tbl_articles.belongsTo(models.tbl_adminusers, {foreignKey: 'TeacherID', as: 'teachers'})
      tbl_articles.belongsTo(models.tbl_subject, {foreignKey: 'SubjectId', as: 'subjects'})
    }
  }
  tbl_articles.init({
    ArticlesID: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    TeacherID: DataTypes.INTEGER,
    ArticlesTitle: DataTypes.STRING,
    SubjectId: DataTypes.INTEGER,
    PaperId: DataTypes.INTEGER,
    ReadTime: DataTypes.INTEGER,
    ImageOne: DataTypes.STRING,
    ImageTwo: DataTypes.STRING,
    Description: DataTypes.TEXT,
    ArticlesContent: DataTypes.STRING,
    Status: DataTypes.BOOLEAN,
    Isdeleted: DataTypes.BOOLEAN,
    AddedOn: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    }
  }, {
    sequelize,
    tableName: 'tbl_Articles',
    modelName: 'tbl_articles',
  });
  return tbl_articles;
};