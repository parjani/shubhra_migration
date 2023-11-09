'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tbl_gst extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  tbl_gst.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    title : DataTypes.STRING,
    value : DataTypes.STRING,
    status : {
      type: DataTypes.BOOLEAN,
      defaultValue: 1
    },
    is_deleted : {
      type: DataTypes.BOOLEAN,
      defaultValue: 0
    },
    created_at : {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    }
  }, {
    sequelize,
    tableName: 'tbl_gst',
    modelName: 'tbl_gst',
  });
  return tbl_gst;
};