'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tbl_editorcategories extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  tbl_editorcategories.init({
    editorCategoryID: DataTypes.BIGINT,
    categoryTitle: DataTypes.STRING,
    description: DataTypes.TEXT,
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1
    },
    isDeleted: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    addedOn: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      allowNull: true,
    },
  }, {
    sequelize,
    tableName: 'tbl_EditorCategories',
    modelName: 'tbl_editorcategories',
  });
  return tbl_editorcategories;
};