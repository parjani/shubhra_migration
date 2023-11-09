'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tbl_practisetestuserresultlogs extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  tbl_practisetestuserresultlogs.init({
    rid: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    ptestid: DataTypes.STRING,
    userid: DataTypes.STRING,
    questionid: DataTypes.BIGINT,
    qanswer: DataTypes.STRING,
    IsCorrectAnswer: DataTypes.BOOLEAN(0),
    testduration: DataTypes.INTEGER,
    qoption: DataTypes.STRING,
    language: DataTypes.STRING,
    addedon: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
  }, {
    sequelize,
    tableName: 'tbl_practisetestuserresultlogs',
    modelName: 'tbl_practisetestuserresultlogs',
  });
  return tbl_practisetestuserresultlogs;
};