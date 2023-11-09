'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tbl_lectureview extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  tbl_lectureview.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    userId: DataTypes.STRING,
    courseId: DataTypes.STRING,
    TotalTimeAllocated: DataTypes.INTEGER,
    updatedTotalTimeAllocated: DataTypes.INTEGER,
    onDemand: {
      type: DataTypes.BOOLEAN,
      defaultValue: 0
    },
    remainingTime: DataTypes.INTEGER,
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
    tableName: 'tbl_lectureviews',
    modelName: 'tbl_lectureview',
  });
  return tbl_lectureview;
};