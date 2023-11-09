'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tbl_ourprograms extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // tbl_ourprograms
      // define association here
      tbl_ourprograms.belongsTo(models.tbl_centers, {
        foreignKey: 'center_id',
        as: 'CenterData'
      })
    }
  }
  tbl_ourprograms.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    type: DataTypes.ENUM("online", "classroom", "regional"),
    description: DataTypes.TEXT,
    price: DataTypes.FLOAT(10, 2),
    benifitOne: DataTypes.TEXT,
    benifitTwo: DataTypes.TEXT,
    benifitThree: DataTypes.TEXT,
    benifitFour: DataTypes.TEXT,
    redirectUrl: DataTypes.STRING,
    center_id: DataTypes.INTEGER,
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
    status : {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1
    },
    isDeleted : {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'tbl_ourprograms',
    modelName: 'tbl_ourprograms',
  });
  return tbl_ourprograms;
};