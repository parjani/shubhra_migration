'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tbl_lectureviewlist extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      tbl_lectureviewlist.belongsTo(models.tbl_lecture, {
        foreignKey: "lectureId",
        as: "lecture"
      }),
      tbl_lectureviewlist.hasMany(models.tbl_lectureviewlistlog, {
        foreignKey: "lectureviewlistId",
        as: "lectureviewlistlogs"
      })
    }
  }
  tbl_lectureviewlist.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    onDemand: {
      type: DataTypes.BOOLEAN,
      defaultValue: 0
    },
    isPlaying: {
      type: DataTypes.BOOLEAN,
      defaultValue: 0
    },
    lectureviewId: DataTypes.BIGINT,
    userId: DataTypes.STRING,
    courseId: DataTypes.STRING,
    lectureId: DataTypes.BIGINT,
    lectureOrder: DataTypes.INTEGER,
    timeAllocated: DataTypes.INTEGER,
    skiped: {
      type: DataTypes.BOOLEAN,
      defaultValue: 0
    },
    remainingTime: DataTypes.INTEGER,
    lastPlay: DataTypes.STRING,
    TotalPlayedTime: DataTypes.STRING,
    TotalCoverdTime: DataTypes.INTEGER,
    Platform: DataTypes.STRING,
    IPAddress: DataTypes.STRING,
    endDate: DataTypes.DATE,
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
    sectionId : DataTypes.STRING
  }, {
    sequelize,
    tableName: 'tbl_lectureviewlists',
    modelName: 'tbl_lectureviewlist',
  });
  return tbl_lectureviewlist;
};