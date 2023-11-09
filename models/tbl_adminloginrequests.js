'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tbl_adminloginrequests extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  tbl_adminloginrequests.init({
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    ipadress: DataTypes.STRING,
    loginkey: DataTypes.STRING,
    addedon : {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
    isexpired:DataTypes.BOOLEAN(0),
  }, {
    sequelize,
    tableName: 'tbl_adminloginrequests',
    modelName: 'tbl_adminloginrequests',
  });
  return tbl_adminloginrequests;
};