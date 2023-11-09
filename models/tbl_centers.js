'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tbl_centers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      tbl_centers.hasOne(models.tbl_centerpage, {
        foreignKey: "centerId",
        as: 'centerPageData'
      })
    }
  }
  tbl_centers.init({
    CenterID: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    CenterName: DataTypes.STRING,
    code: DataTypes.STRING,
    City: DataTypes.STRING,
    State: DataTypes.STRING,
    Address: DataTypes.STRING,
    Phone1: DataTypes.STRING,
    Phone2: DataTypes.STRING,
    Phone3: DataTypes.STRING,
    EmailID: DataTypes.STRING,
    ContactPerson: DataTypes.STRING,
    Timing: DataTypes.STRING,
    status : {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1
    },
    is_deleted : {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'tbl_Centers',
    modelName: 'tbl_centers',
  });
  return tbl_centers;
};