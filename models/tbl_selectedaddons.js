'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tbl_selectedaddons extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  tbl_selectedaddons.init({
    billing_course_id: DataTypes.STRING,
    user_id: DataTypes.STRING,
    addon_id: DataTypes.INTEGER,
    created_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    }
  }, {
    sequelize,
    tableName: 'tbl_selectedaddons',
    modelName: 'tbl_selectedaddons',
  });
  return tbl_selectedaddons;
};