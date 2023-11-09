'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tbl_lectureviewlistlog extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  tbl_lectureviewlistlog.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    lectureviewlistId: DataTypes.BIGINT,
    userId: DataTypes.STRING,
    courseId: DataTypes.STRING,
    playTime: DataTypes.INTEGER,
    Platform: DataTypes.STRING,
    IPAddress: DataTypes.STRING,
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
    tableName: 'tbl_lectureviewlistlogs',
    modelName: 'tbl_lectureviewlistlog',
  });
  return tbl_lectureviewlistlog;
};