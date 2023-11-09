'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tbl_affiliateassignedcourses extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  tbl_affiliateassignedcourses.init({
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    AffiliateID: DataTypes.INTEGER,
    CourseID: DataTypes.STRING,
    AssignedOn: {
      type: DataTypes.DATE
      },
  }, {
    sequelize,
    tableName: 'tbl_AffiliateAssignedCourses',
    modelName: 'tbl_affiliateassignedcourses',
  });
  return tbl_affiliateassignedcourses;
};