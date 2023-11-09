'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tbl_coursequestionnaire extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  tbl_coursequestionnaire.init({
    QuestionID: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    CourseID : DataTypes.STRING,
    Question : DataTypes.TEXT,  
    QuestionAnswer : DataTypes.TEXT,  
    AddedOn : {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
    isdeleted : {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: 0
      },
  }, {
    sequelize,
    tableName: 'tbl_Coursequestionnaire',
    modelName: 'tbl_coursequestionnaire',
  });
  return tbl_coursequestionnaire;
};