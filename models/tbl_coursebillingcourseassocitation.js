'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tbl_coursebillingcourseassocitation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      tbl_coursebillingcourseassocitation.belongsTo(models.tbl_courses, { foreignKey: 'CourseId', as: 'CourseData' });
    }
  }
  tbl_coursebillingcourseassocitation.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    CourseId: DataTypes.STRING,
    BillingCourseId: DataTypes.STRING,
    Status: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1
    },
    IsDeleted: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    CreatedAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    }
  }, {
    sequelize,
    tableName: 'tbl_coursebillingcourseassocitation',
    modelName: 'tbl_coursebillingcourseassocitation',
  });
  return tbl_coursebillingcourseassocitation;
};