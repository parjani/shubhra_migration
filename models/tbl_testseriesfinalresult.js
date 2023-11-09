'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tbl_testseriesfinalresult extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  tbl_testseriesfinalresult.init({
    Resultid: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    PtestID: DataTypes.STRING,
    UserID: DataTypes.STRING,
    TestDuration: DataTypes.STRING,
    CorrectAns: DataTypes.INTEGER,
    WrongAns: DataTypes.INTEGER,
    SkipAns: DataTypes.INTEGER,
    Marks: DataTypes.DECIMAL,
    isdeleted: DataTypes.BOOLEAN(0),
    addedon: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
    positiveMark: DataTypes.INTEGER,
    negativeMark: DataTypes.INTEGER,
    resultURL: DataTypes.STRING
  }, {
    sequelize,
    tableName: 'tbl_TestSeriesFinalResult',
    modelName: 'tbl_testseriesfinalresult',
  });
  return tbl_testseriesfinalresult;
};