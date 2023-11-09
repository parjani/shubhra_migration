'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tbl_teachersubject extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      tbl_teachersubject.belongsTo(models.tbl_subjectmaster, {
        foreignKey: 'subject_id',
        as: 'SubjectData'
      })
    }
  }
  tbl_teachersubject.init({
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    faculty_id : DataTypes.STRING,
    subject_id : DataTypes.INTEGER,
    status : {
      type: DataTypes.INTEGER,
      defaultValue: 1
    },
    is_deleted : {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    created_at : {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    }
  }, 
  {
    sequelize,
    tableName: 'tbl_teachersubject',
    modelName: 'tbl_teachersubject',
  });
  return tbl_teachersubject;
};