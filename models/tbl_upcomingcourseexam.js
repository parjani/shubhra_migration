'use strict';
const {
  Model, STRING
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tbl_upcomingcourseexam extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      tbl_upcomingcourseexam.belongsTo(models.tbl_billingcources, {foreignKey : 'billing_course_id', as : 'BillingCourse'})
      // tbl_upcomingcourseexam.belongsTo(models.tbl_testtypes, {foreignKey : 'exam_type_id', as : 'ExamType'})
      tbl_upcomingcourseexam.belongsTo(models.exam_type, {foreignKey : 'exam_type_id', as : 'ExamType'})
    }
  }
  tbl_upcomingcourseexam.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    exam_type_id : DataTypes.INTEGER,
    billing_course_id : DataTypes.STRING,
    status : {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1
    },
    created_at :  {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
  }, {
    sequelize,
    tableName: 'tbl_upcomingcourseexam',
    modelName: 'tbl_upcomingcourseexam',
  });
  return tbl_upcomingcourseexam;
};