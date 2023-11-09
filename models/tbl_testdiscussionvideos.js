'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tbl_testdiscussionvideos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      tbl_testdiscussionvideos.belongsTo(models.tbl_coursetypes, {
        foreignKey: 'CourseTypeID',
        as: 'courseType'
      })
    }
  }
  tbl_testdiscussionvideos.init({
    Videoid: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    Videotitle: DataTypes.STRING,
    Videonumber: {
      type: DataTypes.STRING,
      allowNull: true
    },
    CourseTypeID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Videodesc: {
      type: DataTypes.STRING,
      allowNull: true
    },
    targetyear: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Status: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1
    },
    isdeleted: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    addedon: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
    language: DataTypes.STRING,
    titleSlug: DataTypes.STRING,
    type: DataTypes.INTEGER
  }, {
    sequelize,
    tableName: 'tbl_testdiscussionvideos',
    modelName: 'tbl_testdiscussionvideos'
  });
  return tbl_testdiscussionvideos;
};