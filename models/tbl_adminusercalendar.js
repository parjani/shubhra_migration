'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tbl_adminusercalendar extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  tbl_adminusercalendar.init({
    EventID: {
      type: DataTypes.STRING,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    UserID: DataTypes.STRING,
    EventTitle: DataTypes.STRING,
    Description: DataTypes.STRING,
    Location: DataTypes.STRING,
    StartDate: DataTypes.STRING,
    StartTime: DataTypes.STRING,
    EndDate: DataTypes.STRING,
    EndTime: DataTypes.STRING,
    Status : DataTypes.BOOLEAN(1),
    Isdeleted : DataTypes.BOOLEAN(1),
    AddedOn : {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
  }, {
    sequelize,
    tableName: 'tbl_AdminUserCalendar',
    modelName: 'tbl_adminusercalendar',
  });
  return tbl_adminusercalendar;
};