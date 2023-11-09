'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tbl_contactus extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      tbl_contactus.belongsTo(models.tbl_centers, {
        foreignKey: 'centerId',
        as: 'center'
      })

    }
  }
  tbl_contactus.init({
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    centerId: DataTypes.BIGINT,
    fullname: DataTypes.STRING,
    billingCourseId: DataTypes.STRING,
    email: DataTypes.STRING,
    mobile: DataTypes.STRING,
    query: DataTypes.STRING,
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
    status: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    }
  }, {
    sequelize,
    modelName: 'tbl_contactus',
  });
  return tbl_contactus;
};