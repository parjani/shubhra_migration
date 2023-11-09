'use strict';
const {
  Model, BOOLEAN
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tbl_usertypes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      tbl_usertypes.hasMany(models.tbl_roleaccess, { foreignKey : "role_id", as : "RoleAccess" })
    }
  }
  tbl_usertypes.init({
    UserTypeID: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    UserTypeName: DataTypes.STRING,
    Description : DataTypes.STRING,
    status : {
      type : DataTypes.BOOLEAN,
      allowNull : false,
      defaultValue : 1
    },
    isdeleted : {
      type : DataTypes.BOOLEAN,
      allowNull : false,
      defaultValue : 0
    },
    addedon : {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    }
  }, {
    sequelize,
    tableName: 'tbl_UserTypes',
    modelName: 'tbl_usertypes',
  });
  return tbl_usertypes;
};