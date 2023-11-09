'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tbl_adminusermacids extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  tbl_adminusermacids.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    username: DataTypes.STRING,
    macaddress: DataTypes.STRING,
    accesstype: DataTypes.INTEGER(3),
  }, {
    sequelize,
    tableName: 'tbl_adminusermacids',
    modelName: 'tbl_adminusermacids',
  });
  return tbl_adminusermacids;
};