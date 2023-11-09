'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tbl_addoncourses extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      tbl_addoncourses.belongsTo(models.tbl_billingcources, {foreignKey: 'addon_course_id', as: 'addOnCourseData'})
      // define association here
    }
  }
  tbl_addoncourses.init({
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    billing_course_id : DataTypes.STRING,
    addon_course_id : DataTypes.STRING,
    price : DataTypes.STRING,
    name : DataTypes.STRING,
    addon_id : DataTypes.INTEGER,
    is_free_offered : {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    status : {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1
    },
    is_deleted : {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    created_at : {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
  }, {
    sequelize,
    tableName: 'tbl_addoncourses',
    modelName: 'tbl_addoncourses',
  });
  return tbl_addoncourses;
};