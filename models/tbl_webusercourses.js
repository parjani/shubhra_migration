'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tbl_webusercourses extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      tbl_webusercourses.belongsTo(models.tbl_courses, {
        foreignKey: "courseid",
        as: "course"
      })
    }
  }
  tbl_webusercourses.init({
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    studentid: DataTypes.STRING,
    courseid: DataTypes.STRING,
    BillingCourseID: DataTypes.STRING,
    feespaid: DataTypes.DECIMAL(18, 2),
    accesstype: DataTypes.STRING,
    AddedOn: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
    status: {
      type: DataTypes.BOOLEAN,
      defaultValue: 1
    }
  }, {
    sequelize,
    tableName: 'tbl_WebUserCourses',
    modelName: 'tbl_webusercourses',
  });
  tbl_webusercourses.removeAttribute('id');
  return tbl_webusercourses;
};