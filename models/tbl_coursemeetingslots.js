'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tbl_coursemeetingslots extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  tbl_coursemeetingslots.init({
    SlotID: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      CMCID: DataTypes.BIGINT,
      MentorID: DataTypes.STRING,
      MeetingDate: DataTypes.DATE,
      MentorID: DataTypes.STRING,
      MentorID: DataTypes.STRING,
      IsCancelled : {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: 0
      },
  }, {
    sequelize,
    tableName: 'tbl_CourseMeetingSlots',
    modelName: 'tbl_coursemeetingslots',
  });
  return tbl_coursemeetingslots;
};