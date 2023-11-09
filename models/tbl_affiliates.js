'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tbl_affiliates extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  tbl_affiliates.init({
    affiliateid: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    firstname: DataTypes.STRING(100),
    lastname: DataTypes.STRING(100),
    middlename: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    emailid: DataTypes.STRING(100),
    username: DataTypes.STRING(50),
    password: DataTypes.STRING(100),
    mobile: DataTypes.STRING(15),
    whatsupnumber: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    telephone: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    gstnumber: DataTypes.STRING(50),
    pannumber: DataTypes.STRING(50),
    idphoto: DataTypes.STRING(50),
    addprooffront: DataTypes.STRING(50),
    addproofback: DataTypes.STRING(50),
    webcomission: {
      type: DataTypes.DECIMAL(18, 2),
      allowNull: true
    },
    tabcomission: {
      type: DataTypes.DECIMAL(18, 2),
      allowNull: true
    },
    address: DataTypes.STRING(500),
    city: DataTypes.STRING(50),
    state: DataTypes.STRING(100),
    zipcode: DataTypes.STRING(10),
    landmark: DataTypes.STRING(100),
    affiliatecode: DataTypes.STRING(100),
    contractfile: DataTypes.STRING(100),
    description: DataTypes.STRING(100),
    addedon: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
    isactive: DataTypes.BOOLEAN(1),
    isdeleted: DataTypes.BOOLEAN(0),
    displayorder: {
      type: DataTypes.BOOLEAN(0),
      allowNull: true
    },
  }, {
    sequelize,
    tableName: 'tbl_affiliates',
    modelName: 'tbl_affiliates',
  });
  return tbl_affiliates;
};