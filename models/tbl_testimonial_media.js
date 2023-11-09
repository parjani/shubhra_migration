'use strict';
const {
  Model, BOOLEAN
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tbl_testimonial_media extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  tbl_testimonial_media.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    testimonialId : DataTypes.INTEGER,
    mediaPath : DataTypes.STRING,
    status : DataTypes.BOOLEAN(1),
    isdeleted: DataTypes.BOOLEAN(0),
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
  }, {
    sequelize,
    tableName: 'tbl_testimonial_media',
    modelName: 'tbl_testimonial_media',
  });
  return tbl_testimonial_media;
};