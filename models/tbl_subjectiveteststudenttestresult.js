'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tbl_subjectiveteststudenttestresult extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      tbl_subjectiveteststudenttestresult.belongsTo(models.tbl_courses, {
        foreignKey: "CourseID",
        as: "course"
      })
      tbl_subjectiveteststudenttestresult.belongsTo(models.tbl_sectiontests, {
        foreignKey: "SectionTestID",
        as: "test"
      })
      tbl_subjectiveteststudenttestresult.belongsTo(models.tbl_webusers, {
        foreignKey: "UserID",
        as: "user"
      })
      tbl_subjectiveteststudenttestresult.belongsTo(models.tbl_adminusers, {
        foreignKey: "EvaluatedID",
        as: "evaluator"
      })
    }
  }
  tbl_subjectiveteststudenttestresult.init({
    subjectivetsetresultid: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    SectionTestID: DataTypes.STRING,
    CourseID: DataTypes.STRING,
    UserID: DataTypes.STRING,
    UploadedAnswerSheet: DataTypes.STRING,
    UploadedOn: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
    AssignOn: {
      type: DataTypes.DATE
    },
    EvaluatedID: DataTypes.STRING,
    EvaluatedAnswerSheet: DataTypes.STRING,
    EvaluatedOn: {
      type: DataTypes.DATE

    },
    TotalMarks: DataTypes.INTEGER,
    MarksObtained: DataTypes.DECIMAL(10, 2),
    Coment: DataTypes.TEXT,
    EvaluationStatus: DataTypes.STRING,
    EvaluationType: DataTypes.STRING,
    EVCopyStatus: DataTypes.STRING,
    ESGEvalDate: DataTypes.DATE,
    ESBtoAdminDate: DataTypes.DATE,
    ESGBtoStdDate: DataTypes.DATE,
    SCollectCDate: DataTypes.DATE,
    moderatedDate: DataTypes.DATE,
    isReuploaded: {
      type: DataTypes.BOOLEAN,
      defaultValue: 0
    }

  }, {
    sequelize,
    tableName: 'Tbl_SubjectiveTestStudentTestResult',
    modelName: 'tbl_subjectiveteststudenttestresult',
  });
  return tbl_subjectiveteststudenttestresult;
};