'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tbl_coursetypes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      tbl_coursetypes.belongsTo(models.tbl_adminusers, {foreignKey: 'CourseTypeAdminId', as: 'courseTypeAdmin'})
    }
  }
  tbl_coursetypes.init({
    CourseTypeID: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    verticle_id: DataTypes.INTEGER,
    CourseTypeName: DataTypes.STRING,
    CourseTypeDesc: DataTypes.STRING,
    CourseTypeAdminId: DataTypes.STRING,
    SRCode: DataTypes.STRING,
    RCCode: DataTypes.STRING,
    IsActive: DataTypes.BOOLEAN(1),
    IsDeleted: DataTypes.BOOLEAN(0),
    AddedOn: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
  }, {
    sequelize,
    tableName: 'tbl_coursetypes',
    modelName: 'tbl_coursetypes',
  });
  return tbl_coursetypes;
};