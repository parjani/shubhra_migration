'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tbl_announcements extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  tbl_announcements.init({
    ID: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    AnnouncementsTitle: DataTypes.STRING(500),
    AnnouncementsDesc: DataTypes.TEXT,
    StartDate: DataTypes.DATE,
    EndDate: DataTypes.DATE,
    Status: DataTypes.BOOLEAN(1), 
    isdeleted: DataTypes.BOOLEAN(0),
    AddedOn: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
  }, {
    sequelize,
    tableName: 'tbl_Announcements',
    modelName: 'tbl_announcements',
  });
  return tbl_announcements;
};