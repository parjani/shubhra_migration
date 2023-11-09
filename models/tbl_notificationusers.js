'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tbl_notificationusers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      tbl_notificationusers.belongsTo(models.tbl_notification, {
        foreignKey: "nid",
        as: "notification"
      })
    }
  }
  tbl_notificationusers.init({
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    studentid: DataTypes.STRING,
    nid: DataTypes.BIGINT,
    addedon: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
    isseen: {
      type: DataTypes.BOOLEAN,
      defaultValue: 0
    },
    isdeleted: {
      type: DataTypes.BOOLEAN,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'tbl_NotificationUsers',
    modelName: 'tbl_notificationusers',
  });
  return tbl_notificationusers;
};