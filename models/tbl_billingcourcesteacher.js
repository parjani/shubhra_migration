'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tbl_billingcourcesteacher extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      tbl_billingcourcesteacher.belongsTo(models.tbl_adminusers, { foreignKey: 'teacher_id', as: 'TeacherData' });
    }
  }
  tbl_billingcourcesteacher.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    billing_course_id: DataTypes.STRING,
    teacher_id: DataTypes.STRING,
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
    is_deleted: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1
    },
  }, {
    sequelize,
    tableName: 'tbl_billingcourcesteacher',
    modelName: 'tbl_billingcourcesteacher',
  });
  return tbl_billingcourcesteacher;
};