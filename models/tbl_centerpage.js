'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tbl_centerpage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      tbl_centerpage.belongsTo(models.tbl_centers, {
        foreignKey: "centerId",
        as: "center"
      })
      tbl_centerpage.hasMany(models.tbl_centerpageimage, {
        foreignKey: "centerpageId",
        as: "centerImage"
      })
      tbl_centerpage.hasMany(models.tbl_centerpagefaq, {
        foreignKey: "centerpageId",
        as: "centerFaq"
      })
      tbl_centerpage.hasMany(models.tbl_centerpagecourse, {
        foreignKey: "centerpageId",
        as: "centerCourse"
      })
      tbl_centerpage.belongsTo(models.tbl_courseverticles, {
        foreignKey: "courseverticleId",
        as: "courseVerticle"
      })
    }
  }
  tbl_centerpage.init({
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    centerId: DataTypes.INTEGER,
    latitude: DataTypes.STRING,
    longitude: DataTypes.STRING,
    videoBankId: DataTypes.INTEGER,
    introductionVideoURL: DataTypes.STRING,
    courseverticleId: DataTypes.INTEGER,
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
    tableName: 'tbl_centerpages',
    modelName: 'tbl_centerpage',
  });
  return tbl_centerpage;
};