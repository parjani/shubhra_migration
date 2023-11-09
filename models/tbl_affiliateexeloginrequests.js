'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tbl_affiliateexeloginrequests extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  tbl_affiliateexeloginrequests.init({
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
    password: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ipadress: {
      type: DataTypes.STRING,
      allowNull: true
    },
    loginkey: {
      type: DataTypes.STRING,
      allowNull: true
    },
    addedon: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
    isexpired: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
  }, {
    sequelize,
    tableName: 'tbl_AffiliateEXELoginRequests',
    modelName: 'tbl_affiliateexeloginrequests',
  });
  return tbl_affiliateexeloginrequests;
};