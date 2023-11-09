'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tbl_faqmodules extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      tbl_faqmodules.belongsTo(models.tbl_videobankmastermodules, {
        foreignKey: 'module_id',
        as: 'moduleData'
      })
      tbl_faqmodules.belongsTo(models.tbl_faq, {
        foreignKey: 'faq_id',
        as: 'faq'
      })
    }
  }
  tbl_faqmodules.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    faq_id: DataTypes.INTEGER,
    module_id: DataTypes.INTEGER,
    module: DataTypes.STRING,
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1
    },
    is_deleted: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    created_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
  }, {
    sequelize,
    tableName: 'tbl_faqmodules',
    modelName: 'tbl_faqmodules',
  });
  return tbl_faqmodules;
};