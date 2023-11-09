'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tbl_toppers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      tbl_toppers.belongsTo(models.tbl_stream, {
        foreignKey: 'StreamID',
        as: 'StreamData'
      })
      tbl_toppers.hasMany(models.tbl_toppercenter, {
        foreignKey: 'TopperID',
        as: 'topperCenterData'
      })
    }
  }
  tbl_toppers.init({
    TopperID: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false
    },
    rank: DataTypes.INTEGER,
    course: DataTypes.STRING,
    TopperName: DataTypes.STRING,
    DisplayOrder: DataTypes.INTEGER,
    StreamID: DataTypes.INTEGER,
    Year: DataTypes.INTEGER,
    ProfilePic: DataTypes.STRING,
    Status: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1
    },
    Isdeleted: {
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
    tableName: 'tbl_Toppers',
    modelName: 'tbl_toppers',
  });
  return tbl_toppers;
};