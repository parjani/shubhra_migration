'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tbl_mcqtestquestions extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  tbl_mcqtestquestions.init({
    QuestionID: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    SectionTestID: DataTypes.STRING,
    Question: DataTypes.TEXT,
    Option1: DataTypes.TEXT,
    Option2: DataTypes.TEXT,
    Option3: DataTypes.TEXT,
    Option4: DataTypes.TEXT,
    Option5: DataTypes.TEXT,
    CorrectOption: DataTypes.TEXT,
    AnswerDesc: DataTypes.TEXT,
    IsImport: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    IsDeleted: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    AddedOn: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
    language: {
      type: DataTypes.STRING
    },
    parentQuestionId: {
      type: DataTypes.STRING
    }
  }, {
    sequelize,
    tableName: 'tbl_MCQTestQuestions',
    modelName: 'tbl_mcqtestquestions',
  });
  return tbl_mcqtestquestions;
};