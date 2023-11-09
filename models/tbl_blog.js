'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tbl_blog extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      tbl_blog.belongsTo(models.tbl_blogcategory, {foreignKey: 'categoryid', as: 'blogCategoty'})
    }
  }
  tbl_blog.init({
    blogid: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    categoryid : DataTypes.INTEGER,
    blogtitle : DataTypes.STRING,
    blogdesc : DataTypes.TEXT,
    videolink : DataTypes.STRING,
    filename : DataTypes.STRING,
    isactive : DataTypes.BOOLEAN(1),
    isdeleted : DataTypes.BOOLEAN(0),
    addedon : {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
  }, {
    sequelize,
    tableName: 'tbl_blog',
    modelName: 'tbl_blog',
  });
  return tbl_blog;
};