'use strict';
const {
  Model, STRING
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tbl_subject extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  tbl_subject.init({
    SubjectID: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    SubjectName: DataTypes.STRING,
    Status: DataTypes.BOOLEAN,
    Isdelete: DataTypes.BOOLEAN
  }, {
    sequelize,
    tableName: 'tbl_Subject',
    modelName: 'tbl_subject',
  });
  return tbl_subject;
};