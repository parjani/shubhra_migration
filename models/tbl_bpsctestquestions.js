'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tbl_bpsctestquestions extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  tbl_bpsctestquestions.init({
    QuestionID: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      SectionTestID:DataTypes.STRING,
      Question : DataTypes.TEXT,
      Option1: DataTypes.TEXT,
      Option2: DataTypes.TEXT,
      Option3: DataTypes.TEXT,
      Option4: DataTypes.TEXT,
      Option5: DataTypes.TEXT,
      CorrectOption: DataTypes.STRING,
      AnswerDesc: DataTypes.TEXT,
      AddedOn : {
        type : DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        allowNull: true,
      },
      IsImport: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: 0
      },
      IsDeleted : {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: 0
      }
  }, {
    sequelize,
    tableName: 'tbl_BPSCTestQuestions',
    modelName: 'tbl_bpsctestquestions',
  });
  return tbl_bpsctestquestions;
};