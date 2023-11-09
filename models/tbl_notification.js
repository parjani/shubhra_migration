'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tbl_notification extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      tbl_notification.belongsTo(models.tbl_lecture, {
        foreignKey: "videoid",
        as: 'lecture'
      })
    }
  }
  tbl_notification.init({
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    sendTo: DataTypes.INTEGER,
    type: DataTypes.INTEGER,
    videoid: DataTypes.STRING,
    pdfUrl: DataTypes.STRING,
    isdeleted: {
      type: DataTypes.BOOLEAN,
      defaultValue: 0
    },
    isAdmin: {
      type: DataTypes.BOOLEAN,
      defaultValue: 0
    },
    addedon: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
    isSent: DataTypes.BOOLEAN,
    categoryIds: DataTypes.TEXT,
    courseIds: DataTypes.TEXT
  }, {
    sequelize,
    tableName: 'tbl_notifications',
    modelName: 'tbl_notification'
  });
  return tbl_notification;
};