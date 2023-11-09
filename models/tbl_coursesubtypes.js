'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tbl_coursesubtypes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      tbl_coursesubtypes.belongsTo(models.tbl_coursetypes, {
        foreignKey: "courseTypeId",
        as: "courseCategory"
      })
    }
  }
  tbl_coursesubtypes.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    courseTypeId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    slug: DataTypes.STRING,
    status: DataTypes.BOOLEAN,
    isDeleted: DataTypes.BOOLEAN,
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
    tableName: 'tbl_coursesubtypes',
    modelName: 'tbl_coursesubtypes',
  });
  return tbl_coursesubtypes;
};