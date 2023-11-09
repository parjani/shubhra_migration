'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tbl_testgraphrange extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  tbl_testgraphrange.init({
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    testId: DataTypes.STRING,
    rangeFrom: DataTypes.INTEGER,
    rangeTo: DataTypes.INTEGER,
    totalStudent: DataTypes.INTEGER,
    totalMarks: DataTypes.DECIMAL(5, 2),
    average: DataTypes.DECIMAL(5, 2),
    status: {
      type: DataTypes.BOOLEAN,
      defaultValue: 1
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    }
  }, {
    sequelize,
    tableName: 'tbl_testgraphranges',
    modelName: 'tbl_testgraphrange'
  });
  return tbl_testgraphrange;
};