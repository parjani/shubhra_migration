'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tbl_coursesubject extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      tbl_coursesubject.belongsTo(models.tbl_subjectmaster, { foreignKey: 'subjectid', as: 'SubjectData' })
    }
  }


  tbl_coursesubject.init({
    courseid: DataTypes.STRING,
    subjectid: DataTypes.INTEGER,
  }, {
    sequelize,
    tableName: 'tbl_coursesubject',
    modelName: 'tbl_coursesubject',
  });
  
  tbl_coursesubject.removeAttribute('id');


  return tbl_coursesubject;
};