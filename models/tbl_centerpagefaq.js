'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tbl_centerpagefaq extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      tbl_centerpagefaq.belongsTo(models.tbl_faq, {
        foreignKey: "faqId",
        as: 'faq'
      })
    }
  }
  tbl_centerpagefaq.init({
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    centerpageId: DataTypes.BIGINT,
    faqId: DataTypes.BIGINT,
    status: {
      type: DataTypes.BOOLEAN,
      defaultValue: 1
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    }
  }, {
    sequelize,
    tableName: 'tbl_centerpagefaqs',
    modelName: 'tbl_centerpagefaq',
  });
  return tbl_centerpagefaq;
};