'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tbl_faq extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      tbl_faq.hasMany(models.tbl_faqmodules, {
        foreignKey: 'faq_id',
        as: 'modules'
      }),
      tbl_faq.hasMany(models.tbl_faqtags, {
        foreignKey: 'faq_id',
        as: 'tags'
      })
    }
  }
  tbl_faq.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    image : DataTypes.STRING,
    type : {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    title : DataTypes.STRING,
    orders : DataTypes.INTEGER,
    is_default : {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    question : DataTypes.TEXT,
    answer : DataTypes.TEXT,
    status : {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1
    },
    is_deleted : {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    created_at : {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
  }, {
    sequelize,
    tableName: 'tbl_faq',
    modelName: 'tbl_faq',
  });
  return tbl_faq;
};