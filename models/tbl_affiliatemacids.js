'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tbl_affiliatemacids extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  tbl_affiliatemacids.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    username: {
        type: DataTypes.STRING,
        allowNull: true
    },
    macaddress: {
      type: DataTypes.STRING,
      allowNull: true
  },
  accesstype: {
    type: DataTypes.INTEGER,
    allowNull: true
},
  }, {
    sequelize,
    tableName: 'tbl_AffiliateMacIDs',
    modelName: 'tbl_affiliatemacids',
  });
  return tbl_affiliatemacids;
};