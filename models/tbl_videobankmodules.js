'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tbl_videobankmodules extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      tbl_videobankmodules.belongsTo(models.tbl_videobankmastermodules, {
        foreignKey: 'masterModuleId',
        as: 'module'
      })
      tbl_videobankmodules.belongsTo(models.tbl_videobankmasters, {
        foreignKey: 'videoBankId',
        as: 'videoBank'
      })
    }
  }
  tbl_videobankmodules.init({
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    videoBankId: DataTypes.BIGINT, //tbl_videobankmasters id
    masterModuleId: DataTypes.BIGINT, //tbl_videobankmastermodules id
    AddedOn: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    }
  }, {
    sequelize,
    tableName: 'tbl_videobankmodules',
    modelName: 'tbl_videobankmodules',
  });
  return tbl_videobankmodules;
};