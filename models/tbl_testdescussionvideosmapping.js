'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tbl_testdescussionvideosmapping extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      tbl_testdescussionvideosmapping.belongsTo(models.tbl_sectiontests, {
          foreignKey: 'TestID',
          as: 'testDetails'
        }),
        tbl_testdescussionvideosmapping.belongsTo(models.tbl_testdiscussionvideos, {
          foreignKey: 'VideoID',
          as: 'videoDeatils'
        })
    }
  }
  tbl_testdescussionvideosmapping.init({
    TestID: DataTypes.STRING,
    VideoID: DataTypes.INTEGER,
    addedOn: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
    language: DataTypes.STRING

  }, {
    sequelize,
    tableName: 'tbl_TestDescussionVideosMapping',
    modelName: 'tbl_testdescussionvideosmapping'
  });

  tbl_testdescussionvideosmapping.removeAttribute('id');

  return tbl_testdescussionvideosmapping;
};