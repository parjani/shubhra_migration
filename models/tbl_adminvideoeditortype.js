'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tbl_adminvideoeditortype extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  tbl_adminvideoeditortype.init({
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    userId : DataTypes.STRING,
    typeName : DataTypes.STRING,
    isDeleted : {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    status : {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1
    },
    CreatedAt : {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
  }, {
    sequelize,
    tableName: 'tbl_adminvideoeditortype',
    modelName: 'tbl_adminvideoeditortype',
  });
  return tbl_adminvideoeditortype;
};