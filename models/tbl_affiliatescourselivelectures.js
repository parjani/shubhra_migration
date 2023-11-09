'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tbl_affiliatescourselivelectures extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  tbl_affiliatescourselivelectures.init({
    id:  {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    AffiliateID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    liveLectureID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Addedon:  {
      type: DataTypes.DATE,
      allowNull: true
  },
  }, {
    sequelize,
    tableName: 'tbl_AffiliatesCourseLiveLectures',
    modelName: 'tbl_affiliatescourselivelectures',
  });
  return tbl_affiliatescourselivelectures;
};