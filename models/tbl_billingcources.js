'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tbl_billingcources extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      tbl_billingcources.belongsTo(models.tbl_centers, { foreignKey: 'CourseCenter', as: 'CourseCenterData' });
      tbl_billingcources.hasMany(models.tbl_coursebillingcourseassocitation, { foreignKey: 'BillingCourseId', as: 'Courses' });
      tbl_billingcources.hasMany(models.tbl_billingcoursebyregionalcenter, { foreignKey: 'billing_course_id', as: 'RegionalCenterData' });
      tbl_billingcources.belongsTo(models.tbl_videobankmasters, { foreignKey: 'videoURL', as: 'DetailVideo' });
      tbl_billingcources.hasMany(models.tbl_recommendedcourse, { foreignKey: 'billing_course_id', as: 'RecommendedCourse' });
      tbl_billingcources.hasMany(models.tbl_billingcourseplatform, { foreignKey: 'billing_course_id', as: 'BillingCoursePlatform' });
      tbl_billingcources.hasMany(models.tbl_billingcoursebyregionalcenter, { foreignKey: 'billing_course_id', as: 'RegionalCenterDetail' });
      tbl_billingcources.hasMany(models.tbl_billingcourcesteacher, { foreignKey: 'billing_course_id', as: 'BillingCourseTeachers' });
    }
  }
  tbl_billingcources.init({
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false
    },
    CourseCode: DataTypes.STRING,
    CourseCategory: DataTypes.INTEGER,
    CourseSubCategory: DataTypes.INTEGER,
    TargetYear: DataTypes.STRING,
    CourseTitle: DataTypes.STRING,
    CourseFee: DataTypes.STRING,
    DisplayNameEng: DataTypes.STRING,
    ExamType: DataTypes.STRING,
    DisplayNameHindi: DataTypes.STRING,
    CourseDuration: DataTypes.STRING,
    CourseCenter: DataTypes.STRING,
    BatchTime: DataTypes.STRING,
    CourseVerticle: DataTypes.INTEGER,
    CourseType: DataTypes.STRING,
    AdmissionStartDate: DataTypes.DATE,
    AdmissionEndDate: DataTypes.DATE,
    CourseStartDate: DataTypes.DATE,
    CourseEndDate: DataTypes.DATE,
    CourseFor: DataTypes.STRING,
    CourseCordinator: DataTypes.STRING,
    CourseTeacher: DataTypes.STRING,
    GSTRate: DataTypes.STRING,
    DisplayOnWebsite: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    CourseCode: DataTypes.STRING,
    SRNewStudentCourseFee: DataTypes.STRING,
    SROldStudentCourseFee: DataTypes.STRING,
    RCNewStudentCourseFee: DataTypes.STRING,
    RCOldStudentCourseFee: DataTypes.STRING,
    AffiliateMaxDiscount: DataTypes.STRING,
    SRMaxDiscount: DataTypes.STRING,
    AffiliateCommissionWithClassRoom: DataTypes.STRING,
    InstallmentAllowed: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    NoOfInstallments: DataTypes.STRING,
    MinFirstInstallment: DataTypes.STRING,
    CoursePlatform: DataTypes.STRING,
    TabletCost: DataTypes.STRING,
    BatchNumber: DataTypes.STRING,
    videoURL: DataTypes.STRING,
    NumberOfSeat: DataTypes.STRING,
    CourseMaterial: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    isOnDemand: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    CourseRefundable: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    CourseStatus: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1
    },
    CourseDescription: DataTypes.TEXT,
    image: DataTypes.STRING,
    IsDeleted: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    CreatedAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
  }, {
    sequelize,
    tableName: 'tbl_billingcources',
    modelName: 'tbl_billingcources',
  });
  return tbl_billingcources;
};