'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tbl_affiliatestudentsadmissions extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  tbl_affiliatestudentsadmissions.init({
    AdmissionID: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    affiliateid: DataTypes.INTEGER,
    FirstName: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    MiddleName: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    LastName: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    EmailID: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Mobile: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    EmergencyContactNo: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Education: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    IDProof: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    IDPhoto: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    PHouseNo: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    PStreet: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    PLandmark: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    PCity: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    PState: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    PZipCode: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    THouseNo: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    TStreet: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    TLandmark: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    TCity: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    TState: {
      type: DataTypes.STRING(100),
      allowNull: true
    }, 
    TZipCode: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    CourseID: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    CourseName: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    CourseFees: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Discount: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    NetFees: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    AdmissionStatus: {
      type: DataTypes.STRING(50),
      defaultValue: 'Awaiting Payment',
      allowNull: true
    },
    Status: {
      type: DataTypes.BOOLEAN(1),
      allowNull: true
    },
    IsDeleted: {
      type: DataTypes.BOOLEAN(0),
      allowNull: true
    },
    AddedOn: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
    ApprovedOn: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
    OldStdDiscount: {
      type: DataTypes.DECIMAL(18,2),
      allowNull:true,
      defaultValue:'0.00'
    },
    BAdmissionID: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    IDProofBack: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    PaymentRemark: {
      type: DataTypes.STRING(5000),
      allowNull: true
    },
    UpgradeDiscount: {
      type: DataTypes.DECIMAL(18,2),
      allowNull:true,
      defaultValue:'0.00'
    },
    UpgradeReason: {
      type: DataTypes.STRING(500),
      allowNull: true
     },
    couponcode: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    coupondiscount: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue:'0'
    },
    BalancePayment: {
      type: DataTypes.DECIMAL(18,2),
      allowNull:true,
      defaultValue:'0.00'
    },
  }, {
    sequelize,
    tableName: 'tbl_AffiliateStudentsAdmissions',
    modelName: 'tbl_affiliatestudentsadmissions',
  });
  return tbl_affiliatestudentsadmissions;
};