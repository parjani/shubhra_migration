'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tbl_sectiontests extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      tbl_sectiontests.belongsTo(models.tbl_adminusers, {
          foreignKey: 'TeacherID',
          as: 'teacher'
        }),
        tbl_sectiontests.belongsTo(models.tbl_adminusers, {
          foreignKey: 'DesignerID',
          as: 'designer'
        }),
        tbl_sectiontests.belongsTo(models.tbl_coursetypes, {
          foreignKey: 'CourseCategory',
          as: 'courseCategory'
        }),
        tbl_sectiontests.belongsTo(models.tbl_testtypes, {
          foreignKey: 'TestType',
          as: 'testType'
        }),
        tbl_sectiontests.belongsTo(models.tbl_courseverticles, {
          foreignKey: 'courseverticleId',
          as: 'courseverticle'
        }),
        tbl_sectiontests.hasOne(models.tbl_coursetests, {
          foreignKey: 'TestID',
          as: 'courseMapedTest'
        }),
        tbl_sectiontests.hasOne(models.tbl_subjectiveteststudenttestresult, {
          foreignKey: 'SectionTestID',
          as: 'subjectiveResult'
        }),
        tbl_sectiontests.hasMany(models.tbl_testvalueaddednotesmapping, {
          foreignKey: 'TestID',
          as: 'notes'
        }),
        tbl_sectiontests.hasMany(models.tbl_testdescussionvideosmapping, {
          foreignKey: 'TestID',
          as: 'videos'
        })
      tbl_sectiontests.hasMany(models.tbl_testgraphrange, {
        foreignKey: 'testId',
        as: 'graphRange'
      })

    }
  }
  tbl_sectiontests.init({
    SectionTestID: {
      type: DataTypes.STRING,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    TeacherID: DataTypes.STRING,
    DesignerID: DataTypes.STRING,
    TestTitle: DataTypes.STRING,
    TestType: DataTypes.STRING,
    TestSubType: DataTypes.STRING,
    ClassTestCategory: DataTypes.STRING,
    CourseCategory: DataTypes.STRING,
    TargetYear: DataTypes.STRING,
    TestPaperPDF: DataTypes.STRING,
    ModelAnswerSheetPDF: DataTypes.STRING,
    StartDate: DataTypes.DATE,
    EndDate: DataTypes.DATE,
    TotalQuestions: DataTypes.STRING,
    positiveMark: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    negativeMark: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    TotalMarks: DataTypes.INTEGER,
    TestDuration: DataTypes.STRING,
    ReviewVideoURL: DataTypes.STRING,
    Status: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1
    },
    DisplayOrder: DataTypes.BOOLEAN,
    Cfield1: DataTypes.TEXT,
    CField2: DataTypes.TEXT,
    CField3: DataTypes.TEXT,
    CField4: DataTypes.TEXT,
    CField5: DataTypes.TEXT,
    IsDeleted: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    AddedOn: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
    IsApproved: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: null
    },
    ApprovedDate: DataTypes.DATE,
    IsRejected: {
      type: DataTypes.BOOLEAN,
      defaultValue: 0
    },
    RejectDate: DataTypes.DATE,
    RejectReason: DataTypes.TEXT,
    SyllabusPDF: DataTypes.STRING,
    lastMapped: { //only for test artifact mapping
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
    courseverticleId: {
      type: DataTypes.STRING
    }
  }, {
    sequelize,
    tableName: 'tbl_SectionTests',
    modelName: 'tbl_sectiontests',
  });

  tbl_sectiontests.removeAttribute('id');

  return tbl_sectiontests;
};