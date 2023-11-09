'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tbl_practisetestuserresults extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  tbl_practisetestuserresults.init({
    rid: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    userid: DataTypes.STRING,
    ptestid: DataTypes.STRING,
    questionid: DataTypes.BIGINT,
    qanswer: DataTypes.STRING,
    IsCorrectAnswer: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    testduration: DataTypes.INTEGER,
    addedon: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
    qoption: DataTypes.STRING,
    language: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'tbl_practisetestuserresults',
  });
  return tbl_practisetestuserresults;
};