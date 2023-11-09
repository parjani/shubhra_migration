'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tbl_courseverticles extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      tbl_courseverticles.hasMany(models.tbl_courseverticlelanguage, {
        foreignKey: 'courseverticleId',
        as: 'courseverticlelanguage'
      })
      tbl_courseverticles.hasMany(models.tbl_centerpage, {
        foreignKey: "courseverticleId",
        as: "centerPages"
      })
    }
  }
  tbl_courseverticles.init({
    Id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    Name: DataTypes.STRING,
    FullName: DataTypes.STRING,
    Status: DataTypes.BOOLEAN(1),
    IsDeleted: DataTypes.BOOLEAN(0),
    CreatedAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
  }, {
    sequelize,
    tableName: 'tbl_courseverticles',
    modelName: 'tbl_courseverticles',
  });
  return tbl_courseverticles;
};