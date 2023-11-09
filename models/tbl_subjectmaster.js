'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tbl_subjectmaster extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      tbl_subjectmaster.belongsTo(models.tbl_subjectmaster, {foreignKey: 'ParentID', as: 'parentSubjectName'})
    }
  }
  tbl_subjectmaster.init({
    SubjectID: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    SubjectTitle : DataTypes.STRING,
    ParentID : DataTypes.INTEGER,
    Status : DataTypes.BOOLEAN(1),
    IsDeleted : DataTypes.BOOLEAN(0),
    AddedOn :{
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
  }, {
    sequelize,
    tableName: 'tbl_SubjectMaster',
    modelName: 'tbl_subjectmaster',
  });
  return tbl_subjectmaster;
};