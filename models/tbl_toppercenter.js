'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tbl_toppercenter extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      tbl_toppercenter.belongsTo(models.tbl_centers, {
        foreignKey: 'centerId',
        as: 'centerDetails'
      })
    }
  }
  tbl_toppercenter.init({
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    TopperID: DataTypes.STRING,
    centerId: DataTypes.INTEGER,
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1
    },
  }, {
    sequelize,
    tableName: 'tbl_toppercenters',
    modelName: 'tbl_toppercenter',
  });
  return tbl_toppercenter;
};