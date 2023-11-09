'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tbl_courselocationaccess extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  tbl_courselocationaccess.init({
      id: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      courseid : DataTypes.STRING,
      studentid : DataTypes.STRING,
      addedon: DataTypes.DATE,
  }, {
    sequelize,
    tableName: 'tbl_courselocationaccess',
    modelName: 'tbl_courselocationaccess',
  });
  return tbl_courselocationaccess;
};