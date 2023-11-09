'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tbl_blogcategory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  tbl_blogcategory.init({
    CategoryID: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    BlogCategoryName : DataTypes.STRING,
    BlogCategoryDesc : DataTypes.STRING,
    IsActive : DataTypes.BOOLEAN(1),
    IsDeleted : DataTypes.BOOLEAN(0),
    Addedon: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    }
  }, {
    sequelize,
    tableName: 'tbl_BlogCategory',
    modelName: 'tbl_blogcategory',
  });
  return tbl_blogcategory;
};