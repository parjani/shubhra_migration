// let migrationAuth = require("../app/middleware/migration");
// let migration = require('./migration/migration')

// module.exports = function (app) {
//     app.use("/api/migration", migrationAuth, migration);
// }
const migrationAuth = require("../app/middleware/migration");
const manipulate = require('../app/migration/databaseManipulateController');
const migration = require('../app/migration/databaseMigrationController');

module.exports = function (app) {
    app.use('/api/migration', migrationAuth, (req, res, next) => {
        migration.ExceptionalLectureAccess(req, res, next);(req, res, () => {
            // migration.adminUserMigration(req, res, next);
            // migration.insertExamTypes(req, res, next);
            // migration.CreateLiveLectureChannels(req, res, next);
            // migration.CreateLiveLectureChannels(req, res, next);
            // migration.TeacherSubjectMigration(req, res, next);
            // migration.billingTransectionMigration(req, res, next);
             //migration.courseLiveLecture(req, res, next);
            // migration.GroupMeetingMigration(req, res, next);
            // migration.insertConfig(req, res, next);
             migration.BillingCoursesMigration(req, res, next);
             migration.CourseBillingCourseLinking(req, res, next);
             //migration.insertTestType(req, res, next);
             //migration.CourseTypeMigration(req, res, next);
             migration.courseLectures(req, res, next);
             migration.ExceptionalLectureAccess(req, res, next);
            // migration.TestDiscussionVideoMigration(req, res, next);
        });
    });
}