const { dump } = require("../helper/logs")
const db = require("../../models");
const moment = require("moment");
const { success, failed, successRes, failedRes } = require("../helper/response");
const { where, Op } = require("sequelize");

let sequelize = db.sequelize;
const AdminUser = db.tbl_adminusers;
const UserType = db.tbl_usertypes;
const ExamType = db.exam_type;
const Config = db.tbl_configs;
const Course = db.tbl_courses;
const AddonCourse = db.tbl_addoncourses;
const CoursePlatform = db.tbl_courseplatform;
const CourseLecture = db.tbl_courselectures;
const CourseLiveLectureSchedule = db.tbl_courselivelectureschedule;
const SectionTest = db.tbl_sectiontests;
const CourseTest = db.tbl_coursetests;
const CourseType = db.tbl_coursetypes;
const CourseVerticle = db.tbl_courseverticles;
const ExceptionalLectureAccess = db.tbl_exceptionallectureaccess;
const GroupMeeting = db.tbl_groupmeeting;
const Livelecturechannels = db.tbl_livelecturechannels;
const CourseAdminSubject = db.tbl_courseadminsubjects;
const TeacherSubject = db.tbl_teachersubject;
const TestDiscussionVideo = db.tbl_testdiscussionvideos;
const TestSeriesFinalResult = db.tbl_testseriesfinalresult;
const WenBillingCourse = db.webcourses;// webcourses from another db McqToolDB
const WenBillingCourseDetail = db.tbl_WebCourseDetails;// tbl_WebCourseDetails detail from another db McqToolDB
const BillingCourse = db.tbl_billingcources;
const BillingCoursePlatform = db.tbl_billingcourseplatform;
const BillingTransection = db.tbl_BillingTransactions;
const CourseBillingCourseAssocitation = db.tbl_coursebillingcourseassocitation;
const CourseLinking = db.tbl_courselinking;// tbl_courselinking detail from another db McqToolDB
const BillingCourseTransectionNew = db.tbl_BillingTransactionsNew;// tbl_BillingTransactionsNew detail from another db McqToolDB

async function addHours(date, hours) {
    date.setTime(date.getTime() + hours * 60 * 60 * 1000);

    return date;
}

module.exports = {
    adminUserMigration: async (req, res) => {
        try {
            await sequelize.query(`SET FOREIGN_KEY_CHECKS = 0`);
            // user tbl_adminusers table
            // update course admin role 
            await AdminUser.update(
                {
                    UserTypeID: 2
                },
                {
                    where: {
                        UserTypeID: 6
                    }
                }
            )

            // update Moderator role 
            await AdminUser.update(
                {
                    UserTypeID: 6
                },
                {
                    where: {
                        UserTypeID: 7
                    }
                }
            )
            // update Affiliate Admin role 
            await AdminUser.update(
                {
                    UserTypeID: 7
                },
                {
                    where: {
                        UserTypeID: 10
                    }
                }
            )

            await UserType.destroy({ truncate: true, cascade: false })

            await UserType.bulkCreate([
                {
                    UserTypeID: 1,
                    UserTypeName: "Administrator",
                    Description: "Administrator",
                    status: 1,
                    isdeleted: 0,
                },
                {
                    UserTypeID: 2,
                    UserTypeName: "Course Admin",
                    Description: "Course Admin",
                    status: 1,
                    isdeleted: 0,
                },
                {
                    UserTypeID: 3,
                    UserTypeName: "Course Coordinator",
                    Description: "Course Coordinator",
                    status: 1,
                    isdeleted: 0,
                },
                {
                    UserTypeID: 4,
                    UserTypeName: "Teacher",
                    Description: "Teacher",
                    status: 1,
                    isdeleted: 0,
                },
                {
                    UserTypeID: 5,
                    UserTypeName: "Evaluator",
                    Description: "Evaluator",
                    status: 1,
                    isdeleted: 0,
                },
                {
                    UserTypeID: 6,
                    UserTypeName: "Moderator",
                    Description: "Moderator",
                    status: 1,
                    isdeleted: 0,
                },
                {
                    UserTypeID: 7,
                    UserTypeName: "Affiliate Admin",
                    Description: "Affiliate Admin",
                    status: 1,
                    isdeleted: 0,
                }
            ])

            await sequelize.query(`SET FOREIGN_KEY_CHECKS = 1`);

            return successRes(res, 'Success', {});

        } catch (error) {
            dump({ error })
            return failedRes(res, error.message);
        }
    },

    // add billing course WenBillingCourse
    BillingCoursesMigration: async (req, res) => {
        try {

            await sequelize.query(`SET FOREIGN_KEY_CHECKS = 0`);

            // get existing billing courses
            let existingBillingCourses = await WenBillingCourse.findAll();
            for (let index = 0; index < existingBillingCourses.length; index++) {

                let billingCourseDetail = await WenBillingCourseDetail.findOne({
                    where: {
                        CourseID: existingBillingCourses[index].CourseID
                    }
                });

                let courseTypeDetail = await CourseType.findOne({
                    where: {
                        CourseTypeName: billingCourseDetail ? billingCourseDetail.CourseType : ""
                    }
                })

                let insertDaata = {
                    id: existingBillingCourses[index].CourseID,
                    CourseTitle: existingBillingCourses[index].CourseTitle,
                    CourseFee: existingBillingCourses[index].Fees,
                    DisplayNameEng: existingBillingCourses[index].DisplayName,
                    DisplayNameHindi: existingBillingCourses[index].DisplayNameHindi,
                    CourseDuration: existingBillingCourses[index].Duration,
                    CourseCenter: existingBillingCourses[index].CourseCentre,
                    BatchTime: existingBillingCourses[index].BatchTime,
                    CourseVerticle: 1,
                    CourseType: "Both",
                    AdmissionStartDate: existingBillingCourses[index].AdmissionStartDate,
                    AdmissionEndDate: existingBillingCourses[index].AdmissionEndDate,
                    CourseStartDate: existingBillingCourses[index].CourseStartDate,
                    CourseEndDate: existingBillingCourses[index].CourseEndDate,
                    CourseFor: "Both",
                    CourseCordinator: null,
                    CourseTeacher: existingBillingCourses[index].TeacherID,
                    GSTRate: billingCourseDetail ? billingCourseDetail.RateOfGST : 0,
                    DisplayOnWebsite: existingBillingCourses[index].isdisplay,
                    CourseCode: null,
                    SRNewStudentCourseFee: existingBillingCourses[index].Fees,
                    SROldStudentCourseFee: existingBillingCourses[index].Fees,
                    RCNewStudentCourseFee: existingBillingCourses[index].Fees,
                    RCOldStudentCourseFee: existingBillingCourses[index].Fees,
                    AffiliateMaxDiscount: 0,
                    SRMaxDiscount: 0,
                    AffiliateCommissionWithClassRoom: null,
                    AffiliateCommissionWithoutClassRoom: null,
                    InstallmentAllowed: billingCourseDetail ? billingCourseDetail.isInstallment : 0,
                    NoOfInstallments: billingCourseDetail ? billingCourseDetail.Maxinstallments : 0,
                    MinFirstInstallment: null,
                    CoursePlatform: null,
                    TabletCost: 0,
                    CourseMaterial: billingCourseDetail ? billingCourseDetail.isMaterial : 0,
                    CourseRefundable: 0,
                    CourseStatus: existingBillingCourses[index].Status,
                    CourseDescription: existingBillingCourses[index].Description,
                    image: null,
                    IsDeleted: existingBillingCourses[index].IsDeleted,
                    videoURL: null,
                    ExamType: 0,
                    TargetYear: null,
                    CourseCategory: courseTypeDetail.CourseTypeID,
                    CourseSubCategory: 0,
                    isOnDemand: 0,
                    BatchNumber: 0,
                    NumberOfSeat: 60,
                }

                await BillingCourse.create(insertDaata);

                // add billing course platform
                let platformData = {};
                if (billingCourseDetail.isTablet == 1) {
                    platformData = {
                        billing_course_id: existingBillingCourses[index].CourseID,
                        platform_mode: "tablet"
                    }
                } else {
                    platformData = {
                        billing_course_id: existingBillingCourses[index].CourseID,
                        platform_mode: "website"
                    }
                }

                await BillingCoursePlatform.create(platformData);
            }

            await sequelize.query(`SET FOREIGN_KEY_CHECKS = 1`);

            return successRes(res, 'Success', {});

        } catch (error) {
            dump({ error })
            return failedRes(res, error.message);
        }
    },

    // course and billing course linking
    CourseBillingCourseLinking: async (req, res) => {
        try {

            await sequelize.query(`SET FOREIGN_KEY_CHECKS = 0`);

            let allBillingCourseLinking = await CourseLinking.findAll();

            for (let i = 0; i < allBillingCourseLinking.length; i++) {
                let exist = await CourseBillingCourseAssocitation.findOne({
                    where: {
                        CourseId: allBillingCourseLinking[i].intracourseid,
                        BillingCourseId: allBillingCourseLinking[i].onlinecourseid
                    }
                })
                if (!exist) {
                    await CourseBillingCourseAssocitation.create({
                        CourseId: allBillingCourseLinking[i].intracourseid,
                        BillingCourseId: allBillingCourseLinking[i].onlinecourseid
                    })
                }
            }

            await sequelize.query(`SET FOREIGN_KEY_CHECKS = 1`);

            return successRes(res, 'Success', {});
        } catch (error) {
            dump({ error })
            return failedRes(res, error.message);
        }
    },

    // insert data in exam_type 
    insertExamTypes: async (req, res) => {
        try {
            await sequelize.query(`SET FOREIGN_KEY_CHECKS = 0`);

            await ExamType.destroy({ truncate: true, cascade: false })

            await ExamType.bulkCreate([
                {
                    id: 1,
                    title: "Civil Service (Prelims)",
                    description: "Civil Service (Prelims)",
                    status: 1
                },
                {
                    id: 2,
                    title: "Civil Service (Mains)",
                    description: "Civil Service (Mains)",
                    status: 1
                },
                {
                    id: 3,
                    title: "Civil Service (Interview)",
                    description: "Civil Service (Interview)",
                    status: 1
                },
                {
                    id: 4,
                    title: "State PSC",
                    description: "State PSC",
                    status: 1
                },
                {
                    id: 5,
                    title: "NCERT Courses",
                    description: "NCERT Courses",
                    status: 1
                }
            ])

            await sequelize.query(`SET FOREIGN_KEY_CHECKS = 1`);

            return successRes(res, 'Success', {});

        } catch (error) {
            dump({ error })
            return failedRes(res, error.message);
        }
    },

    insertConfig: async (req, res) => {
        try {
            await sequelize.query(`SET FOREIGN_KEY_CHECKS = 0`);
        
            await Config.destroy({ truncate: true, cascade: false });
        
            await Config.bulkCreate([
              {
                id: 1,
                value: "30",
                type: 1
              },
              {
                id: 2,
                value: "xCxLqUF5s3epEVbdsnDKCPjCU7JtDs5R3ogbwuXxc8kC5eWFXq7qAfDfVtRrPg2b",
                type: 2
              }
            ]);
        
            await sequelize.query(`SET FOREIGN_KEY_CHECKS = 1`);
        
            return successRes(res, 'Success', {});
          } catch (error) {
            dump({ error });
            return failedRes(res, error.message);
          }
    },

    // course addons ot testtypes
    insertTestType: async (req, res) => {
        try {
            await sequelize.query(`SET FOREIGN_KEY_CHECKS = 0`);

            await ExamType.destroy({ truncate: true, cascade: false })

            await ExamType.bulkCreate([
                {
                    TestTypeIDTestTypeID: 1,
                    TestTypeName: "Mains Test",
                    TestTypeDesc: "Mains Test",
                    IsActive: 1,
                    IsDeleted: 0,
                },
                {
                    TestTypeIDTestTypeID: 2,
                    TestTypeName: "Essay Test",
                    TestTypeDesc: "Essay Test",
                    IsActive: 1,
                    IsDeleted: 0,
                },
                {
                    TestTypeIDTestTypeID: 3,
                    TestTypeName: "Prelims Test",
                    TestTypeDesc: "Prelims Test",
                    IsActive: 1,
                    IsDeleted: 0,
                },
                {
                    TestTypeIDTestTypeID: 4,
                    TestTypeName: "Class Test",
                    TestTypeDesc: "Class Test",
                    IsActive: 1,
                    IsDeleted: 0,
                },
                {
                    TestTypeIDTestTypeID: 5,
                    TestTypeName: "PSIR Sectional Tests (before Prelims)",
                    TestTypeDesc: "PSIR Sectional Tests (before Prelims)",
                    IsActive: 1,
                    IsDeleted: 0,
                },
                {
                    TestTypeIDTestTypeID: 6,
                    TestTypeName: "PSIR Mains Crash Course",
                    TestTypeDesc: "PSIR Mains Crash Course",
                    IsActive: 1,
                    IsDeleted: 0,
                },
                {
                    TestTypeIDTestTypeID: 7,
                    TestTypeName: "Course Lectures",
                    TestTypeDesc: "Course Lectures",
                    IsActive: 1,
                    IsDeleted: 0,
                },
                {
                    TestTypeIDTestTypeID: 8,
                    TestTypeName: "Live Lectures",
                    TestTypeDesc: "Live Lectures",
                    IsActive: 1,
                    IsDeleted: 0,
                },
            ])

            // create addon for tbl_addoncourses in 
            // get all courses
            let courses = await Course.findAll();
            for (let i = 0; i < courses.length; i++) {
                // create addons for all courses
                if (courses[i].ShowMainTestSeries == 1) {
                    await AddonCourse.create({
                        billing_course_id: null,
                        addon_course_id: courses[i].CourseID,
                        price: null,
                        name: "Mains Test",
                        addon_id: 1,
                        is_free_offered: 1
                    });
                }
                if (courses[i].ShowCourseLectures == 1) {
                    await AddonCourse.create({
                        billing_course_id: null,
                        addon_course_id: courses[i].CourseID,
                        price: null,
                        name: "Course Lectures",
                        addon_id: 7,
                        is_free_offered: 1
                    });
                }
                if (courses[i].ShowPrelimTestSeries == 1) {
                    await AddonCourse.create({
                        billing_course_id: null,
                        addon_course_id: courses[i].CourseID,
                        price: null,
                        name: "Prelims Test",
                        addon_id: 3,
                        is_free_offered: 1
                    });
                }
                if (courses[i].ShowEssayTestSeries == 1) {
                    await AddonCourse.create({
                        billing_course_id: null,
                        addon_course_id: courses[i].CourseID,
                        price: null,
                        name: "Essay Test",
                        addon_id: 2,
                        is_free_offered: 1
                    });
                }
                if (courses[i].ShowClassTestSeries == 1) {
                    await AddonCourse.create({
                        billing_course_id: null,
                        addon_course_id: courses[i].CourseID,
                        price: null,
                        name: "Class Test",
                        addon_id: 4,
                        is_free_offered: 1
                    });
                }
                if (courses[i].ShowPSIRSectionalTestsBeforePrelims == 1) {
                    await AddonCourse.create({
                        billing_course_id: null,
                        addon_course_id: courses[i].CourseID,
                        price: null,
                        name: "PSIR Sectional Tests (before Prelims)",
                        addon_id: 5,
                        is_free_offered: 1
                    });
                }
                if (courses[i].ShowPSIRMainsCrashCourse == 1) {
                    await AddonCourse.create({
                        billing_course_id: null,
                        addon_course_id: courses[i].CourseID,
                        price: null,
                        name: "PSIR Mains Crash Course",
                        addon_id: 6,
                        is_free_offered: 1
                    });
                }

                // update language
                await Course.update(
                    {
                        Language: 1
                    }
                    ,
                    {
                        where: {
                            CourseID: {
                                [Op.ne]: ''
                            }
                        }
                    }
                )

                // create course platform
                let platfomArr = courses[i].Platform;
                let getPlatforms = platfomArr ? platfomArr.split(',').map(function (value) {
                    return value.trim();
                }) : "";

                if (getPlatforms.includes('website')) {
                    await CoursePlatform.create({
                        course_id: courses[i].CourseID,
                        platform: "Website"
                    });
                }

                if (getPlatforms.includes('tablet')) {
                    await CoursePlatform.create({
                        course_id: courses[i].CourseID,
                        platform: "Tablet"
                    });
                }

                if (getPlatforms.includes('mobileapps')) {
                    await CoursePlatform.create({
                        course_id: courses[i].CourseID,
                        platform: "Mobile"
                    });
                }
            }

            await sequelize.query(`SET FOREIGN_KEY_CHECKS = 1`);

            return successRes(res, 'Success', {});
        } catch (error) {
            dump({ error })
            return failedRes(res, error.message);
        }
    },

    // course lecture migration (////)
    courseLectures: async (req, res) => {
        try {
            await sequelize.query(`SET FOREIGN_KEY_CHECKS = 0`);
    
            let courseLectures = await CourseLecture.findAll();
    
            for (let i = 0; i < courseLectures.length; i++) {
                let courseData = await Course.findAll({
                    where: {
                        CourseID: courseLectures[i].courseid
                    }
                });
    
                let scheduledDate = courseLectures[i].scheduledate ? courseLectures[i].scheduledate + " " + courseLectures[i].lecturetime : null;
                let lectureEndDate = moment(courseData.EndDate).format('YYYY-MM-DD') + " " + "23:59";
    
                // if (courseData.OnDemand == 'Y') {
                await CourseLecture.update({
                    dateScheduled: scheduledDate,
                    lectureenddate: lectureEndDate,
                    displaydays: "Always"
                },
                {
                    where: {
                        id: courseLectures[i].id
                    }
                });
    
                console.log('Lecture updated for ID:', courseLectures[i].id); // Log the update information
                // }
            }
    
            await sequelize.query(`SET FOREIGN_KEY_CHECKS = 1`);
    
            console.log('All lectures updated successfully.'); // Log the overall success
            return successRes(res, 'Success', {});
        } catch (error) {
            dump({ error });
            console.error('Error:', error); // Log the error
            return failedRes(res, error.message);
        }
    },

    // table tbl_courselivelectureschedule migration
    courseLiveLecture: async (req, res) => {
        try {
            await sequelize.query(`SET FOREIGN_KEY_CHECKS = 0`);

            let allLiveLecture = await CourseLiveLectureSchedule.findAll();

            for (let i = 0; i < allLiveLecture.length; i++) {

                let endDateTime = allLiveLecture[i].ScheduleDate ? moment(allLiveLecture[i].ScheduleDate).format("YYYY-MM-DD") + " " + allLiveLecture[i].EndTime : null;
                await CourseLiveLectureSchedule.update(
                    {
                        endDateTime: endDateTime
                    },
                    {
                        where: {
                            liveLectureID: allLiveLecture[i].liveLectureID
                        }
                    }
                )
            }

            await sequelize.query(`SET FOREIGN_KEY_CHECKS = 1`);

            return successRes(res, 'Success', {});

        } catch (error) {
            dump({ error })
            return failedRes(res, error.message);
        }
    },

    // table tbl_coursetests migration (////)
    CourseTestMigration: async (req, res) => {
        try {
            await sequelize.query(`SET FOREIGN_KEY_CHECKS = 0`);

            let allCourseTest = await CourseTest.findAll()

            let getFirstAddedOnTime = allCourseTest[0].AddedOn;
            for (let index = 0; index < allCourseTest.length; index++) {
                // get last date time
                let customscheduleDateYime = index != 0 ? allCourseTest[index - 1].customscheduleDate : getFirstAddedOnTime
                let date = new Date(customscheduleDateYime);
                let customScheduleDate = date.setSeconds(date.getSeconds() + 2);
                let sectionTest = await SectionTest.findOne({
                    where: {
                        SectionTestID: allCourseTest[index].TestID
                    }
                })

                // get class course category id
                let courseCategoryDetail = await CourseType.findOne({
                    where: {
                        CourseTypeName: sectionTest.ClassTestCategory
                    }
                })

                await CourseTest.update(
                    {
                        customscheduleDate: index == 0 ? moment(getFirstAddedOnTime).format("YYYY-MM-DD hh:mm") : moment(customScheduleDate).format("YYYY-MM-DD hh:mm"),
                        customId: parseInt(index) + 1,
                        TestType: sectionTest.TestType,
                        ClassTestCategory: courseCategoryDetail ? courseCategoryDetail.CourseTypeID : null 
                    },
                    {
                        where: {
                            CourseID: allCourseTest[index].CourseID,
                            TestID: allCourseTest[index].TestID
                        }
                    }
                )
            }

            await sequelize.query(`SET FOREIGN_KEY_CHECKS = 1`);

            return successRes(res, 'Success', {});

        } catch (error) {
            dump({ error })
            return failedRes(res, error.message);
        }
    },

    // table tbl_sectiontest migration (////)
    SectionTestMigration: async (req, res) => {
        try {
            await sequelize.query(`SET FOREIGN_KEY_CHECKS = 0`);

            let allTest = await SectionTest.findAll();

            for (let index = 0; index < allTest.length; index++) {
                await SectionTest.update({
                    courseverticleId : 1
                },{
                    where : {
                        SectionTestID : allTest[index].SectionTestID
                    }
                })             
            }

            await sequelize.query(`SET FOREIGN_KEY_CHECKS = 1`);

            return successRes(res, 'Success', {});

        } catch (error) {
            dump({ error })
            return failedRes(res, error.message);
        }
    },

    // // table tbl_coursetypes migration (////)
    CourseTypeMigration: async (req, res) => {
        try {
            await sequelize.query(`SET FOREIGN_KEY_CHECKS = 0`);

            let courseCategory = await CourseType.findAll();

            for (let index = 0; index < courseCategory.length; index++) {
                // update verticle id in course category
                await CourseType.update({
                    verticle_id: 1
                },
                {
                    where : {
                        CourseTypeID : {
                            [Op.ne] : ""
                        }
                    }
                })

            }

            await sequelize.query(`SET FOREIGN_KEY_CHECKS = 1`);

            return successRes(res, 'Success', {});

        } catch (error) {
            dump({ error })
            return failedRes(res, error.message);
        }
    },

    // table ExceptionalLectureAccess migration
    ExceptionalLectureAccess: async (req, res) => {
        try {

            await sequelize.query(`SET FOREIGN_KEY_CHECKS = 0`);

            let exceptionalLectureAcceses = await ExceptionalLectureAccess.findAll();

            for (let index = 0; index < exceptionalLectureAcceses.length; index++) {
                let getEndDate = await addHours(new Date(exceptionalLectureAcceses[index].ScheduleDate), 24);

                await ExceptionalLectureAccess.update(
                    {
                        EndDate: getEndDate
                    },
                    {
                        where: {
                            ID: exceptionalLectureAcceses[index].ID
                        }
                    }
                )
            }

            await sequelize.query(`SET FOREIGN_KEY_CHECKS = 1`);

            return successRes(res, 'Success', {});

        } catch (error) {
            dump({ error })
            return failedRes(res, error.message);
        }
    },

    // table tbl_groupmeeting migration
    GroupMeetingMigration: async (req, res) => {
        try {

            await sequelize.query(`SET FOREIGN_KEY_CHECKS = 0`);

            let getGroupMeetings = await GroupMeeting.findAll();

            for (let index = 0; index < getGroupMeetings.length; index++) {
                let meetingEndDate = getGroupMeetings[index].scheduleDate ? moment(getGroupMeetings[index].scheduleDate).format("YYYY-MM-DD HH:mm:ss") : null;
            
                await GroupMeeting.update(
                    {
                        endDateTime: meetingEndDate
                    },
                    {
                        where: {
                            MeetingID: getGroupMeetings[index].MeetingID
                        }
                    }
                )
            }

            await sequelize.query(`SET FOREIGN_KEY_CHECKS = 1`);

            return successRes(res, 'Success', {});

        } catch (error) {
            dump({ error })
            return failedRes(res, error.message);
        }
    },

    // table tbl_livelecturechannels (Livelecturechannels) migration
    CreateLiveLectureChannels: async (req, res) => {
        try {

            await sequelize.query(`SET FOREIGN_KEY_CHECKS = 0`);

            await Livelecturechannels.destroy({ truncate: true, cascade: false });

            await Livelecturechannels.bulkCreate([
                {
                    "id": "1",
                    "name": "AWS Channel 3",
                    "slug": "AWS CHANNEL 3",
                    "link": "https://dil85230eqrls.cloudfront.net/out/v1/7b45780005bd4ae294d48b59d2ced2cd/index.m3u8",
                    "status": "1",
                    "type": "AWS"
                },
                {
                    "id": "2",
                    "name": "AWS Channel 4",
                    "slug": "AWS CHANNEL 4",
                    "link": "https://dil85230eqrls.cloudfront.net/out/v1/8bf7a91ea02346f6a723c6b0df7e082a/index.m3u8",
                    "status": "1",
                    "type": "AWS"
                },
                {
                    "id": "3",
                    "name": "AWS Channel 5",
                    "slug": "AWS CHANNEL 5",
                    "link": "https://dil85230eqrls.cloudfront.net/out/v1/38134eb8c84645309e740a7e6ba5f2d8/index.m3u8",
                    "status": "1",
                    "type": "AWS"
                },
                {
                    "id": "4",
                    "name": "AWS Channel 6",
                    "slug": "AWS CHANNEL 6",
                    "link": "https://d222o9zsxu7ycm.cloudfront.net/out/v1/75ff1f972d1b488d9b90f44550d3f227/index.m3u8",
                    "status": "1",
                    "type": "AWS"
                },
                {
                    "id": "5",
                    "name": "AWS Channel 7",
                    "slug": "AWS CHANNEL 7",
                    "link": "https://d222o9zsxu7ycm.cloudfront.net/out/v1/d687607272f841cfa9abfe02bf782763/index.m3u8",
                    "status": "1",
                    "type": "AWS"
                }
            ]);

            await sequelize.query(`SET FOREIGN_KEY_CHECKS = 1`);

            return successRes(res, 'Success', {});

        } catch (error) {
            dump({ error })
            return failedRes(res, error.message);
        }
    },

    // admin teacher subject migration (CourseAdminSubject, TeacherSubject)
    TeacherSubjectMigration: async (req, res) => {
        try {
            await sequelize.query(`SET FOREIGN_KEY_CHECKS = 0`);

            let courseAdminSubject = await CourseAdminSubject.findAll();

            for (let index = 0; index < courseAdminSubject.length; index++) {
                await TeacherSubject.create({
                    faculty_id: courseAdminSubject[index].courseadminid,
                    subject_id: courseAdminSubject[index].subjectid
                })
            }

            await sequelize.query(`SET FOREIGN_KEY_CHECKS = 1`);

            return successRes(res, 'Success', {});
        } catch (error) {
            dump({ error })
            return failedRes(res, error.message);
        }
    },

    // tbl_testdiscussionvideos migration
    TestDiscussionVideoMigration: async (req, res) => {
        try {
            await sequelize.query(`SET FOREIGN_KEY_CHECKS = 0`);

            let testDiscussionVideo = await TestDiscussionVideo.findAll();

            for (let index = 0; index < testDiscussionVideo.length; index++) {
                let videoSlug = testDiscussionVideo[index].Videotitle;

                let type = 0;
                if (testDiscussionVideo[index].Videonumber.length < 17) {
                    type = 1
                }
                await TestDiscussionVideo.update({
                    titleSlug: videoSlug.toUpperCase(),
                    type: type
                }, {
                    where: {
                        Videoid: testDiscussionVideo[index].Videoid
                    }
                })
            }

            await sequelize.query(`SET FOREIGN_KEY_CHECKS = 1`);

            return successRes(res, 'Success', {});
        } catch (error) {
            dump({ error })
            return failedRes(res, error.message);
        }
    },

    // tbl_testseriesfinalresult migration (////)
    // TestSeriesFinalResultMigration: async (req, res) => {
    //     try {
    //         await sequelize.query(`SET FOREIGN_KEY_CHECKS = 0`);

    //         let testSeriesFinalResult = await TestSeriesFinalResult.findAll();



    //         await sequelize.query(`SET FOREIGN_KEY_CHECKS = 1`);

    //         return successRes(res, 'Success', {});
    //     } catch (error) {
    //         dump({ error })
    //         return failedRes(res, error.message);
    //     }
    // }

    // purchase billing course tbl_BillingTransactionsNew
    billingTransectionMigration: async (req, res) => {
        try {

            await sequelize.query(`SET FOREIGN_KEY_CHECKS = 0`);



            await sequelize.query(`SET FOREIGN_KEY_CHECKS = 1`);

            return successRes(res, 'Success', {});
        } catch (error) {
            dump({ error })
            return failedRes(res, error.message);
        }
    }

}