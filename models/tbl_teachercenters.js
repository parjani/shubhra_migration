'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tbl_teachercenters extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      tbl_teachercenters.belongsTo(models.tbl_centers, {
        foreignKey: 'center_id',
        as: 'CenterData'
      })
    }
  }
  tbl_teachercenters.init({
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    faculty_id : DataTypes.STRING,
    center_id : DataTypes.INTEGER,
    status : {
      type: DataTypes.INTEGER,
      defaultValue: 1
    },
    is_deleted : {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    created_at : {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    }
  }, {
    sequelize,
    tableName: 'tbl_teachercenters',
    modelName: 'tbl_teachercenters',
  });
  return tbl_teachercenters;
};