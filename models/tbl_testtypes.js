'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tbl_testtypes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  tbl_testtypes.init({
    TestTypeID: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    TestTypeName : DataTypes.STRING,
    TestTypeDesc : DataTypes.STRING,
    IsActive : {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1
    },
    IsDeleted : {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    AddedOn : {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    }
  }, {
    sequelize,
    tableName: 'tbl_TestTypes',
    modelName: 'tbl_testtypes',
  });
  return tbl_testtypes;
};