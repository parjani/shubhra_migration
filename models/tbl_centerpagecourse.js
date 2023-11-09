'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tbl_centerpagecourse extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      tbl_centerpagecourse.belongsTo(models.tbl_billingcources, {
        foreignKey: "billing_course_id",
        as: 'course'
      })
      tbl_centerpagecourse.belongsTo(models.exam_type, {
        foreignKey: "examType",
        as: 'examtype'
      })
    }
  }
  tbl_centerpagecourse.init({
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    centerpageId: DataTypes.BIGINT,
    billing_course_id: DataTypes.STRING,
    examType: DataTypes.INTEGER,
    status: {
      type: DataTypes.BOOLEAN,
      defaultValue: 1
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    }
  }, {
    sequelize,
    tableName: 'tbl_centerpagecourses',
    modelName: 'tbl_centerpagecourse',
  });
  return tbl_centerpagecourse;
};