'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tbl_valueaddednotes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      tbl_valueaddednotes.belongsTo(models.tbl_coursetypes, {
        foreignKey: 'CourseTypeID',
        as: 'courseType'
      })
    }
  }
  tbl_valueaddednotes.init({
    VnoteID: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    Vnotetitle: DataTypes.STRING,
    VnoteFile: DataTypes.STRING,
    CourseTypeID: DataTypes.INTEGER,
    Vdescnote: DataTypes.STRING,
    Vtargetyear: DataTypes.STRING,
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
    titleSlug: DataTypes.STRING

  }, {
    sequelize,
    tableName: 'tbl_ValueAddedNotes',
    modelName: 'tbl_valueaddednotes',
  });
  return tbl_valueaddednotes;
};