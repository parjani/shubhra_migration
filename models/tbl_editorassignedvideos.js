'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tbl_editorassignedvideos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  tbl_editorassignedvideos.init({
    videoid : DataTypes.BIGINT,
    editorid : DataTypes.STRING,
    assignedon : DataTypes.DATE,
    isdeleted : {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: 0
    },
  }, {
    sequelize,
    tableName: 'tbl_EditorAssignedVideos',
    modelName: 'tbl_editorassignedvideos',
  });
  return tbl_editorassignedvideos;
};