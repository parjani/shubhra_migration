'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tbl_classnotes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  tbl_classnotes.init({
    noteid: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    notetitle: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    notefile: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    targetyear: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    CourseTypeID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    notedesc: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    status: DataTypes.BOOLEAN(1),
    isdeleted: DataTypes.BOOLEAN(0),
    addedon: {
      type : DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      allowNull: true,
    },
    
  }, {
    sequelize,
    tableName: 'tbl_Classnotes',
    modelName: 'tbl_classnotes',
  });
  return tbl_classnotes;
};