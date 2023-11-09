'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tbl_admincoursetypes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  tbl_admincoursetypes.init({
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    userId : DataTypes.STRING,
    courseCategoryId : DataTypes.BIGINT,
    status : {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1
    },
    isdeleted : {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    createdAt : {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
  }, {
    sequelize,
    modelName: 'tbl_admincoursetypes',
  });
  return tbl_admincoursetypes;
};