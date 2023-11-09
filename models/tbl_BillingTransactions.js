'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tbl_BillingTransactions extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      tbl_BillingTransactions.belongsTo(models.tbl_billingcources, {
        foreignKey: 'CourseID',
        as: 'CourseData'
      })
    }
  }
  tbl_BillingTransactions.init({
    BTransactionID: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    StudentID: DataTypes.STRING,
    AdmissionID: DataTypes.INTEGER,
    CourseID: DataTypes.STRING,
    FreeCourseId: DataTypes.STRING,
    OldAdmissionID: DataTypes.STRING,
    InstallmentID: DataTypes.INTEGER,
    TransactionID: DataTypes.STRING,
    TransactionRefNumber: DataTypes.STRING,
    OrderID: DataTypes.STRING,
    InvoiceNo: DataTypes.STRING,
    FinancialYear: DataTypes.STRING,
    InvoiceDate: DataTypes.DATE,
    TransStatus: DataTypes.STRING,
    PaymentType: DataTypes.STRING,
    CourseFees: DataTypes.DECIMAL(10, 2),
    TaxableValueWithoutDiscount: DataTypes.DECIMAL(10, 2),
    DiscountAmount: DataTypes.DECIMAL(10, 2),
    DiscountTaxableValue: DataTypes.DECIMAL(10, 2),
    NetTaxablevalue: DataTypes.DECIMAL(10, 2),
    AMCGST: DataTypes.DECIMAL(10, 2),
    AMSGST: DataTypes.DECIMAL(10, 2),
    AMIGST: DataTypes.DECIMAL(10, 2),
    NetCourseFee: DataTypes.DECIMAL(10, 2),
    ConvenienceFee: DataTypes.DECIMAL(10, 2),
    TotalTaxableAmount: DataTypes.DECIMAL(10, 2),
    CFCGST: DataTypes.DECIMAL(10, 2),
    CFSGST: DataTypes.DECIMAL(10, 2),
    CFIGST: DataTypes.DECIMAL(10, 2),
    TotalTaxAmount: DataTypes.DECIMAL(10, 2),
    BillAmount: DataTypes.DECIMAL(10, 2),
    RoundedUp: DataTypes.DECIMAL(10, 2),
    CFPercentage: DataTypes.DECIMAL(10, 2),
    IsCFPercentage: DataTypes.BOOLEAN,
    GSTState: DataTypes.STRING,
    BatchID: DataTypes.STRING,
    InvoiceId: DataTypes.STRING,
    Cheque_DDNo: DataTypes.STRING,
    ChequeDate: DataTypes.STRING,
    ChequeAmount: DataTypes.DECIMAL(10, 2),
    BankName: DataTypes.STRING,
    AdmissionType: DataTypes.STRING,
    TransactionType: DataTypes.STRING,
    TransactionDate: DataTypes.STRING,
    PaymentMode: DataTypes.STRING,
    SponsorName: DataTypes.STRING,
    StudentGSTN: DataTypes.STRING,
    CourseName: DataTypes.STRING,
    StudentName: DataTypes.STRING,
    EmailID: DataTypes.STRING,
    Mobile: DataTypes.STRING,
    StudentAddress: DataTypes.STRING,
    Remark: DataTypes.STRING,
    PGateway: DataTypes.STRING,
    isDefaultCourse: { //1=>when assigned during signup,2=>assigned by admin
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    invoice_path: DataTypes.STRING,
    isDefaultCourseActive: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    hasAddon: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    AddedOn: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      allowNull: true,
    }
  }, {
    sequelize,
    tableName: 'tbl_billingtransactions',
    modelName: 'tbl_BillingTransactions',
  });
  return tbl_BillingTransactions;
};