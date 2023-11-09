'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tbl_videobankmasters extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      tbl_videobankmasters.hasMany(models.tbl_videobankmodules, {
          foreignKey: 'videoBankId',
          as: 'videoModules'
        }),
        tbl_videobankmasters.hasMany(models.tbl_videobanktags, {
          foreignKey: 'videoBankId',
          as: 'videoTags'
        })
    }
  }
  tbl_videobankmasters.init({
    videoId: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    isVdoCipherVideo:{
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    isWebsiteVideo : {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1
    },
    videoTitle: {
      type: DataTypes.STRING,
      allowNull: true
    },
    videoDuration: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    videoPlateform: {
      type: DataTypes.STRING,
      allowNull: true
    },
    videoURL: {
      type: DataTypes.STRING,
      allowNull: true
    },
    videoThumbnail: {
      type: DataTypes.STRING,
      allowNull: true
    },
    videoDescription: {
      type: DataTypes.STRING,
      allowNull: true
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1
    },
    isdeleted: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    AddedOn: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    }
  }, {
    sequelize,
    tableName: 'tbl_videobankmasters',
    modelName: 'tbl_videobankmasters'
  });
  return tbl_videobankmasters;
};