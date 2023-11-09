'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tbl_supportenquires extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  tbl_supportenquires.init({
    EnquiryID: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    StudentID: DataTypes.STRING,
    StudentName: DataTypes.STRING,
    EmailID: DataTypes.STRING,
    Mobile: DataTypes.STRING,
    subjectId: {
      type: DataTypes.INTEGER
    },
    Subject: DataTypes.STRING,
    courseId: {
      type: DataTypes.INTEGER
    },
    course: DataTypes.STRING,
    Description: DataTypes.STRING,
    AddedOn: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
    status: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    }
  }, {
    sequelize,
    modelName: 'tbl_SupportEnquires',
  });
  return tbl_supportenquires;
};