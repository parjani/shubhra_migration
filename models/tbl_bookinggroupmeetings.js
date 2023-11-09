'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tbl_bookinggroupmeetings extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  tbl_bookinggroupmeetings.init({
    BookingID: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    GroupMeetingID: DataTypes.STRING(100),
    StudentID: DataTypes.STRING(100),
    BookingDate: {
      type : DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      allowNull: true,
    },
    IsCancelled: DataTypes.BOOLEAN(0),
    
  }, {
    sequelize,
    tableName: 'tbl_BookingGroupMeetings',
    modelName: 'tbl_bookinggroupmeetings',
  });
  return tbl_bookinggroupmeetings;
};