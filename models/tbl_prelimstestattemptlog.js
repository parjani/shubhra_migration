'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tbl_prelimstestattemptlog extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  tbl_prelimstestattemptlog.init({
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    userid: DataTypes.STRING,
    ptestid: DataTypes.STRING,
    starttime: {
      type: DataTypes.DATE
    },
    endtime: {
      type: DataTypes.DATE
    },
    IsSubmit: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  }, {
    sequelize,
    tableName: 'tbl_PrelimsTestAttemptLog',
    modelName: 'tbl_prelimstestattemptlog',
  });
  return tbl_prelimstestattemptlog;
};