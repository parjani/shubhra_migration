'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tbl_testvalueaddednotesmapping extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      tbl_testvalueaddednotesmapping.belongsTo(models.tbl_valueaddednotes, {
          foreignKey: 'NoteID',
          as: 'noteDeatils'
        }),
        tbl_testvalueaddednotesmapping.belongsTo(models.tbl_sectiontests, {
          foreignKey: 'TestID',
          as: 'testDetails'
        })
    }
  }
  tbl_testvalueaddednotesmapping.init({
    TestID: DataTypes.STRING,
    NoteID: DataTypes.INTEGER,
    addedOn: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
    language: DataTypes.STRING,

  }, {
    sequelize,
    tableName: 'tbl_TestValueAddedNotesMapping',
    modelName: 'tbl_testvalueaddednotesmapping'
  });
  tbl_testvalueaddednotesmapping.removeAttribute('id');

  return tbl_testvalueaddednotesmapping;
};