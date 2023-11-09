'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tbl_mentorshipprelimstestfinalresult extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  tbl_mentorshipprelimstestfinalresult.init({
    Resultid: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    PtestID: DataTypes.INTEGER,
    UserID: DataTypes.STRING,
    TestDuration: DataTypes.STRING,
    CorrectAns: DataTypes.INTEGER,
    WrongAns: DataTypes.INTEGER,
    SkipAns: DataTypes.INTEGER,
    Marks: DataTypes.DECIMAL(10, 2),
    isdeleted: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    addedon: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    }
  }, {
    sequelize,
    modelName: 'tbl_MentorshipPrelimsTestFinalResult',
  });
  return tbl_mentorshipprelimstestfinalresult;
};