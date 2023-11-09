'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tbl_moderation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here     
      tbl_moderation.belongsTo(models.tbl_subjectiveteststudenttestresult, {
        foreignKey: "Subjectivetsetresultid",
        as: "subjectivetest"
      })
      tbl_moderation.belongsTo(models.tbl_webusers, {
        foreignKey: "StudentID",
        as: "user"
      })
      tbl_moderation.belongsTo(models.tbl_adminusers, {
        foreignKey: "EvaluatedID",
        as: "evaluator"
      })
    }
  }
  tbl_moderation.init({
    MID: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    Subjectivetsetresultid: DataTypes.INTEGER,
    ModeratorID: DataTypes.STRING,
    EvaluatedID: DataTypes.STRING,
    StudentID: DataTypes.STRING,
    IsComplited: DataTypes.INTEGER,
    Mmark: DataTypes.STRING,
    IsBestCopy: DataTypes.INTEGER,
    AnswerSheet: DataTypes.STRING,
    ReEvaluationSheet: DataTypes.STRING,
    AssignOn: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
    MComplitionDate: DataTypes.DATE,
    ModerationStatus: DataTypes.INTEGER,
    EGrade: DataTypes.INTEGER,
    price: {
      type: DataTypes.DECIMAL(10, 2)
    }
  }, {
    sequelize,
    tableName: 'tbl_Moderation',
    modelName: 'tbl_moderation',
  });
  return tbl_moderation;
};