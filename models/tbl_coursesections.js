'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tbl_coursesections extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      tbl_coursesections.hasMany(models.tbl_courselectures, {
        foreignKey: 'section_id',
        as: 'SectionLectures'
      })
    }
  }
  tbl_coursesections.init({
    SectionID: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false
    },
    CourseID : DataTypes.STRING,
    SectionName : DataTypes.STRING,
    SectionType : DataTypes.STRING,
    SectionDescription : DataTypes.TEXT,
    Status : {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1
    },
    IsDeleted : {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
  }, {
    sequelize,
    tableName: 'tbl_CourseSections',
    modelName: 'tbl_coursesections',
  });
  return tbl_coursesections;
};