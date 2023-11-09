'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tbl_bestcopies extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      tbl_bestcopies.belongsTo(models.tbl_subjectiveteststudenttestresult, {
        foreignKey: "Subjectivetsetresultid",
        as: "subjectivetest"
      })
    }
  }
  tbl_bestcopies.init({
    BCID: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    MID: DataTypes.INTEGER,
    Subjectivetsetresultid: DataTypes.BIGINT,
    BestCopyFile: DataTypes.STRING(100),
    AddedOn: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
  }, {
    sequelize,
    tableName: 'tbl_BestCopies',
    modelName: 'tbl_bestcopies',
  });
  return tbl_bestcopies;
};