var express = require('express');
var router = express.Router();
let databaseManipulate = require("../../app/migration/databaseManipulateController");
let databaseMigration = require("../../app/migration/databaseMigrationController");
const { dump } = require('../../app/helper/logs');

router.get('/create-table', databaseManipulate.createTables);
router.get('/alter-table', databaseManipulate.alterTable);

// data migration routes
router.get('/admin-user', databaseMigration.adminUserMigration);
router.get('/exam-type', databaseMigration.insertExamTypes);
router.get('/config', databaseMigration.insertConfig);
router.get('/addons', databaseMigration.insertTestType);
router.get('/course-category', databaseMigration.CourseTypeMigration);
router.get('/billing-course', databaseMigration.BillingCoursesMigration);
router.get('/course-billingcourse-linking', databaseMigration.CourseBillingCourseLinking);

router.get('/course-lecture', databaseMigration.courseLectures);
router.get('/course-live-channels', databaseMigration.CreateLiveLectureChannels);
router.get('/course-live-lecture', databaseMigration.courseLiveLecture);
router.get('/exceptionsl-lecture', databaseMigration.ExceptionalLectureAccess);
router.get('/course-test', databaseMigration.CourseTestMigration);
router.get('/section-test', databaseMigration.SectionTestMigration);
router.get('/group-meeting', databaseMigration.GroupMeetingMigration);

router.get('/teacher-subject', databaseMigration.TeacherSubjectMigration);
router.get('/test-discussion-video', databaseMigration.TestDiscussionVideoMigration);
router.get('/billing-transection', databaseMigration.billingTransectionMigration);

module.exports = router;