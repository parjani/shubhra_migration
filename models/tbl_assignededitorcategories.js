'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tbl_assignededitorcategories extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  tbl_assignededitorcategories.init({
    UserID:  {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    editorCategoryID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
  }, {
    sequelize,
    tableName: 'tbl_AssignedEditorCategories',
    modelName: 'tbl_assignededitorcategories',
  });
  return tbl_assignededitorcategories;
};