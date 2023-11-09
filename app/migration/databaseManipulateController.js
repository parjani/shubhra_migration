const { dump } = require("../helper/logs")
const db = require("../../models");
const { success, failed, successRes, failedRes, validationfailedRes } = require("../helper/response");
let sequelize = db.sequelize;
let databaseName = process.env.DB_NAME

// check table exist
async function checkTableExistOrNot(tableName) {
    return await sequelize.query(`SELECT count(*) as count FROM information_schema.TABLES WHERE (TABLE_SCHEMA = '${databaseName}') AND (TABLE_NAME = '${tableName}')`);
}

// check column exist
async function checkTableColumnExistOrNot(tableName, columnName) {
    return await sequelize.query(`
                SELECT * FROM information_schema.COLUMNS 
                WHERE TABLE_SCHEMA = '${databaseName}' 
                AND TABLE_NAME = '${tableName}' 
                AND COLUMN_NAME = '${columnName}'`
    );
}

module.exports = {

    // create new tables
    createTables: async (req, res) => {
        try {
            // table creation for tbl_adminvideoeditortype table
            let checkAdminVideoEditorType = await checkTableExistOrNot('tbl_adminvideoeditortype');
            if (checkAdminVideoEditorType[0][0].count == 0) {
                await sequelize.query(
                    `CREATE TABLE tbl_adminvideoeditortype (
                        id int NOT NULL PRIMARY KEY AUTO_INCREMENT,
                        userId varchar(255) DEFAULT NULL,
                        typeName varchar(255) DEFAULT NULL,
                        isDeleted TINYINT(1) DEFAULT 0,
                        status TINYINT(1) DEFAULT 1,
                        CreatedAt DATETIME DEFAULT CURRENT_TIMESTAMP
                    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci`
                );
                dump("exam_type tbl_adminvideoeditortype succesfully.")
            }


            // table creation for tbl_deletednotifications table
            let checkDeletedNotification = await checkTableExistOrNot('tbl_deletednotifications');
            if (checkDeletedNotification[0][0].count == 0) {
                await sequelize.query(
                    `CREATE TABLE tbl_deletednotifications (
                        id int NOT NULL PRIMARY KEY AUTO_INCREMENT,
                        notificationId VARCHAR(255) DEFAULT NULL,
                        studentId varchar(255) DEFAULT NULL,
                        AddedOn DATETIME DEFAULT CURRENT_TIMESTAMP
                    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci`
                );
                dump("exam_type tbl_deletednotifications succesfully.")
            }

            // table creation for exam_type table
            let checkExamTypes = await checkTableExistOrNot('exam_type');
            if (checkExamTypes[0][0].count == 0) {
                await sequelize.query(
                    `CREATE TABLE exam_type (
                        id int NOT NULL PRIMARY KEY AUTO_INCREMENT,
                        title varchar(255) DEFAULT NULL,
                        description TEXT DEFAULT NULL,
                        status TINYINT(1) DEFAULT 1 NOT NULL,
                        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
                    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci`
                );
                dump("exam_type created succesfully.")
            }

            // table creation for tbl_addoncourses table
            let checkAddonCourses = await checkTableExistOrNot('tbl_addoncourses');
            if (checkAddonCourses[0][0].count == 0) {
                await sequelize.query(
                    `CREATE TABLE tbl_addoncourses (
                        id int NOT NULL PRIMARY KEY AUTO_INCREMENT,
                        billing_course_id varchar(255) DEFAULT NULL,
                        addon_course_id varchar(255) DEFAULT NULL,
                        price varchar(255) DEFAULT NULL,
                        name varchar(255) DEFAULT NULL,
                        addon_id int(10) DEFAULT 0 NOT NULL,
                        is_free_offered TINYINT(1) DEFAULT 0 NOT NULL,
                        status TINYINT(1) DEFAULT 1 NOT NULL,
                        is_deleted TINYINT(1) DEFAULT 0 NOT NULL,
                        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
                    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci`
                );
                dump("tbl_addoncourses created succesfully.")
            }

            // table creation for tbl_admincoursetypes table
            let checkAdminCourseType = await checkTableExistOrNot('tbl_admincoursetypes');
            if (checkAdminCourseType[0][0].count == 0) {
                await sequelize.query(
                    `CREATE TABLE tbl_admincoursetypes (
                        id int NOT NULL PRIMARY KEY AUTO_INCREMENT,
                        billing_course_id varchar(255) DEFAULT NULL,
                        addon_course_id varchar(255) DEFAULT NULL,
                        price varchar(255) DEFAULT NULL,
                        name varchar(255) DEFAULT NULL,
                        addon_id int(10) DEFAULT 0 NOT NULL,
                        is_free_offered TINYINT(1) DEFAULT 0 NOT NULL,
                        status TINYINT(1) DEFAULT 1 NOT NULL,
                        is_deleted TINYINT(1) DEFAULT 0 NOT NULL,
                        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
                    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci`
                );
                dump("tbl_admincoursetypes created succesfully.")
            }

            // table creation for tbl_billingaddonaccesscomments table
            let checkBillingAddonAccessComments = await checkTableExistOrNot('tbl_billingaddonaccesscomments');
            if (checkBillingAddonAccessComments[0][0].count == 0) {
                await sequelize.query(
                    `CREATE TABLE tbl_billingaddonaccesscomments (
                        id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
                        billingtransactionaddonId BIGINT(20) NOT NULL,
                        course_id VARCHAR(255) DEFAULT NULL,
                        student_id VARCHAR(255) DEFAULT NULL,
                        accessType TINYINT(1) DEFAULT 1 NOT NULL,
                        comment MEDIUMTEXT DEFAULT NULL,
                        AddedOn DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
                    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci`
                );
                dump("tbl_billingaddonaccesscomments created succesfully.")
            }


            // table creation for tbl_billingcoretakeaway table
            let checkBillingCoretakeAway = await checkTableExistOrNot('tbl_billingcoretakeaway');
            if (checkBillingCoretakeAway[0][0].count == 0) {
                await sequelize.query(
                    `CREATE TABLE tbl_billingcoretakeaway (
                        id bigint NOT NULL PRIMARY KEY AUTO_INCREMENT,
                        billing_course_id varchar(255) DEFAULT NULL,
                        core_take_away_id bigint(20) DEFAULT 0 NOT NULL,
                        status TINYINT(1) DEFAULT 1 NOT NULL,
                        is_deleted TINYINT(1) DEFAULT 0 NOT NULL,
                        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
                    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci`
                );
                dump("tbl_billingcoretakeaway created succesfully.")
            }

            // table creation for tbl_billingcources table
            let checkBillingCources = await checkTableExistOrNot('tbl_billingcources');
            if (checkBillingCources[0][0].count == 0) {
                await sequelize.query(
                    `CREATE TABLE tbl_billingcources (
                          id bigint NOT NULL PRIMARY KEY AUTO_INCREMENT,
                          CourseTitle varchar(255) DEFAULT NULL,
                          CourseFee varchar(255) DEFAULT NULL,
                          DisplayNameEng varchar(255) DEFAULT NULL,
                          DisplayNameHindi varchar(255) DEFAULT NULL,
                          CourseDuration varchar(255) DEFAULT NULL,
                          CourseCenter varchar(255) DEFAULT NULL,
                          BatchTime varchar(255) DEFAULT NULL,
                          CourseVerticle bigint(20) DEFAULT 0 NOT NULL,
                          CourseType varchar(255) DEFAULT NULL,
                          AdmissionStartDate DATE DEFAULT NULL,
                          AdmissionEndDate DATE DEFAULT NULL,
                          CourseStartDate DATE DEFAULT NULL,
                          CourseEndDate DATE DEFAULT NULL,
                          CourseFor varchar(255) DEFAULT NULL,
                          CourseCordinator varchar(255) DEFAULT NULL,
                          CourseTeacher varchar(255) DEFAULT NULL,
                          GSTRate varchar(255) DEFAULT NULL,
                          DisplayOnWebsite varchar(1) DEFAULT NULL,
                          CourseCode varchar(255) DEFAULT NULL,
                          SRNewStudentCourseFee varchar(255) DEFAULT NULL,
                          SROldStudentCourseFee varchar(255) DEFAULT NULL,
                          RCNewStudentCourseFee varchar(255) DEFAULT NULL,
                          RCOldStudentCourseFee varchar(255) DEFAULT NULL,
                          AffiliateMaxDiscount varchar(255) DEFAULT NULL,
                          SRMaxDiscount varchar(255) DEFAULT NULL,
                          AffiliateCommissionWithClassRoom varchar(255) DEFAULT NULL,
                          AffiliateCommissionWithoutClassRoom varchar(255) DEFAULT NULL,
                          InstallmentAllowed TINYINT(1) DEFAULT 0 NOT NULL,
                          NoOfInstallments TINYINT(1) DEFAULT 0 NOT NULL,
                          MinFirstInstallment varchar(255) DEFAULT NULL,
                          CoursePlatform varchar(255) DEFAULT NULL,
                          TabletCost varchar(255) DEFAULT NULL,
                          CourseMaterial TINYINT(1) DEFAULT 0 NOT NULL,
                          CourseRefundable TINYINT(1) DEFAULT 0 NOT NULL,
                          CourseStatus TINYINT(1) DEFAULT 1 NOT NULL,
                          CourseDescription TEXT DEFAULT NULL,
                          image varchar(255) DEFAULT NULL,
                          IsDeleted TINYINT(1) DEFAULT 0 NOT NULL,
                          core_take_away_id bigint(20) DEFAULT 0 NOT NULL,
                          status TINYINT(1) DEFAULT 1 NOT NULL,
                          CreatedAt DATETIME DEFAULT CURRENT_TIMESTAMP,
                          videoURL varchar(255) DEFAULT NULL,
                          ExamType int(11) DEFAULT 0 NOT NULL,
                          TargetYear varchar(10) DEFAULT NULL,
                          CourseCategory int(11) DEFAULT 0 NOT NULL,
                          CourseSubCategory int(11) DEFAULT NULL,
                          isOnDemand TINYINT(1) DEFAULT 0 NOT NULL,
                          BatchNumber varchar(100) DEFAULT NULL,
                          NumberOfSeat varchar(100) DEFAULT NULL
                      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci`
                );
                dump("tbl_billingcources created succesfully.")
            }


            // table creation for tbl_billingcourcesteacher table
            let checkBillingCourcesTeacher = await checkTableExistOrNot('tbl_billingcourcesteacher');
            if (checkBillingCourcesTeacher[0][0].count == 0) {
                await sequelize.query(
                    `CREATE TABLE tbl_billingcourcesteacher (
                        id bigint NOT NULL PRIMARY KEY AUTO_INCREMENT,
                        billing_course_id varchar(100) DEFAULT NULL,
                        teacher_id varchar(100) DEFAULT NULL,
                        createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
                        is_deleted TINYINT(1) DEFAULT 0 NOT NULL,  
                        status TINYINT(1) DEFAULT 1 NOT NULL
                    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci`
                );
                dump("tbl_billingcourcesteacher created succesfully.")
            }


            // table creation for tbl_billingcoursebyregionalcenter table
            let checkBillingCourseByRegionalCenter = await checkTableExistOrNot('tbl_billingcoursebyregionalcenter');
            if (checkBillingCourseByRegionalCenter[0][0].count == 0) {
                await sequelize.query(
                    `CREATE TABLE tbl_billingcoursebyregionalcenter (
                        id bigint NOT NULL PRIMARY KEY AUTO_INCREMENT,
                        billing_course_id varchar(100) DEFAULT NULL,
                        center_id int(10) DEFAULT 0 NOT NULL,
                        rc_new_student_fee varchar(100) DEFAULT NULL,
                        rc_old_student_fee varchar(100) DEFAULT NULL,
                        affiliate_commission_with_classroom varchar(100) DEFAULT NULL,
                        affiliate_commission_without_classroom varchar(100) DEFAULT NULL,
                        affiliate_max_discount varchar(100) DEFAULT NULL,
                        status TINYINT(1) DEFAULT 1 NOT NULL,
                        is_deleted TINYINT(1) DEFAULT 0 NOT NULL,
                        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
                    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci`
                );
                dump("tbl_billingcoursebyregionalcenter created succesfully.")
            }

            // table creation for tbl_billingcourseplatform table
            let checkBillingCoursePlatform = await checkTableExistOrNot('tbl_billingcourseplatform');
            if (checkBillingCoursePlatform[0][0].count == 0) {
                await sequelize.query(
                    `CREATE TABLE tbl_billingcourseplatform (
                        id bigint NOT NULL PRIMARY KEY AUTO_INCREMENT,
                        billing_course_id varchar(100) DEFAULT NULL,
                        platform_mode int(1) COMMENT '1 => website, 2 => tablet, 3 => mobile',
                        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
                        is_deleted TINYINT(1) DEFAULT 0 NOT NULL,  
                        status TINYINT(1) DEFAULT 1 NOT NULL
                      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci`
                );
                dump("tbl_billingcourseplatform created succesfully.")
            }

            // table creation for tbl_billingcourseplatformdetail table
            let checkBillingCoursePlatformDetail = await checkTableExistOrNot('tbl_billingcourseplatformdetail');
            if (checkBillingCoursePlatformDetail[0][0].count == 0) {
                await sequelize.query(
                    `CREATE TABLE tbl_billingcourseplatformdetail (
                         id bigint NOT NULL PRIMARY KEY AUTO_INCREMENT,
                         billing_course_id varchar(100) DEFAULT NULL,
                         platform ENUM('Classroom', 'Tablet', 'Website', 'Mobile') DEFAULT NULL,	
                         type ENUM('Offline','Online') DEFAULT 'Offline' NULL,
                         detail varchar(255) DEFAULT NULL,
                         status TINYINT(1) DEFAULT 1 NOT NULL,
                         created_at DATETIME DEFAULT CURRENT_TIMESTAMP
                       ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci`
                );
                dump("tbl_billingcourseplatformdetail created succesfully.")
            }


            // table creation for tbl_billingfaqs table
            let checkBillingFaqs = await checkTableExistOrNot('tbl_billingfaqs');
            if (checkBillingFaqs[0][0].count == 0) {
                await sequelize.query(
                    `CREATE TABLE tbl_billingfaqs (
                          id bigint NOT NULL PRIMARY KEY AUTO_INCREMENT,
                          billing_course_id varchar(100) DEFAULT NULL,
                          faq_id int(10) DEFAULT 0 NOT NULL,
                          status TINYINT(1) DEFAULT 1 NOT NULL,
                          created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
                          is_deleted TINYINT(1) DEFAULT 0 NOT NULL  
                        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci`
                );
                dump("tbl_billingfaqs created succesfully.")
            }

            // table creation for tbl_billingtransactionaddon table
            let checkBillingTransactionAddon = await checkTableExistOrNot('tbl_billingtransactionaddon');
            if (checkBillingTransactionAddon[0][0].count == 0) {
                await sequelize.query(
                    `CREATE TABLE tbl_billingtransactionaddon (
                           id bigint NOT NULL PRIMARY KEY AUTO_INCREMENT,
                           order_id varchar(100) DEFAULT NULL,
                           billing_transaction_id bigint(20) DEFAULT 0 NOT NULL,
                           student_id varchar(100) DEFAULT NULL, 
                           course_id varchar(100) DEFAULT NULL, 
                           billing_course_id varchar(100) DEFAULT NULL, 
                           addon_id int(10) DEFAULT 0 NOT NULL,
                           addon_name varchar(255) DEFAULT NULL, 
                           addon_fee decimal(10,2) DEFAULT NULL,
                           course_category int(10) DEFAULT 0 NULL,
                           status TINYINT(1) DEFAULT 1 NOT NULL,
                           txnStatus TINYINT(1) DEFAULT 0 NOT NULL,
                           freeAddonOfferedByAdmin TINYINT(1) DEFAULT 0 NOT NULL,
                           created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
                           isDefaultCourse TINYINT(1) DEFAULT 0 NOT NULL,
                           isDefaultCourseActive TINYINT(1) DEFAULT 0 NOT NULL,
                           faq_id int(10) DEFAULT 0 NOT NULL,
                           is_deleted TINYINT(1) DEFAULT 0 NOT NULL  
                         ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci`
                );
                dump("tbl_billingtransactionaddon created succesfully.")
            }

            // table creation for tbl_BillingTransactions table
            let checkBillingTransactions = await checkTableExistOrNot('tbl_BillingTransactions');
            if (checkBillingTransactions[0][0].count == 0) {
                await sequelize.query(
                    `CREATE TABLE tbl_BillingTransactions (
                            BTransactionID int NOT NULL PRIMARY KEY AUTO_INCREMENT,
                            StudentID varchar(255) DEFAULT NULL,
                            AdmissionID varchar(11) DEFAULT NULL,
                            CourseID varchar(255) DEFAULT NULL,
                            FreeCourseId varchar(254) DEFAULT NULL,
                            OldAdmissionID varchar(100) DEFAULT NULL,
                            InstallmentID int(11) DEFAULT NULL,
                            TransactionID varchar(100) DEFAULT NULL,
                            TransactionRefNumber varchar(100) DEFAULT NULL,
                            OrderID varchar(100) DEFAULT NULL,
                            InvoiceNo varchar(50) DEFAULT NULL,
                            FinancialYear varchar(50) DEFAULT NULL,
                            InvoiceDate DATETIME DEFAULT NULL,
                            TransStatus varchar(50) DEFAULT NULL,
                            PaymentType varchar(50) DEFAULT NULL,
                            CourseFees decimal(10,0) DEFAULT NULL,
                            TaxableValueWithoutDiscount decimal(10,0) DEFAULT NULL,
                            DiscountAmount decimal(10,0) DEFAULT NULL,
                            DiscountTaxableValue decimal(10,0) DEFAULT NULL,
                            NetTaxablevalue decimal(10,0) DEFAULT NULL,
                            AMCGST decimal(10,0) DEFAULT NULL,
                            AMSGST decimal(10,0) DEFAULT NULL,
                            AMIGST decimal(10,0) DEFAULT NULL,
                            NetCourseFee decimal(10,0) DEFAULT NULL,
                            ConvenienceFee decimal(10,0) DEFAULT NULL,
                            TotalTaxableAmount decimal(10,0) DEFAULT NULL,
                            CFCGST decimal(10,0) DEFAULT NULL,
                            CFSGST decimal(10,0) DEFAULT NULL,
                            CFIGST decimal(10,0) DEFAULT NULL,
                            TotalTaxAmount decimal(10,0) DEFAULT NULL,
                            BillAmount decimal(10,0) DEFAULT NULL,
                            RoundedUp decimal(10,0) DEFAULT NULL,
                            CFPercentage decimal(10,0) DEFAULT NULL,
                            IsCFPercentage TINYINT(1) DEFAULT  NULL,
                            GSTState varchar(50) DEFAULT NULL,
                            BatchID varchar(50) DEFAULT NULL,
                            InvoiceId varchar(50) DEFAULT NULL,
                            Cheque_DDNo varchar(50) DEFAULT NULL,
                            ChequeDate varchar(50) DEFAULT NULL,
                            ChequeAmount decimal(10,0) DEFAULT NULL,
                            BankName varchar(100) DEFAULT NULL,
                            AdmissionType varchar(50) DEFAULT NULL,
                            TransactionType varchar(50) DEFAULT NULL,
                            TransactionDate varchar(50) DEFAULT NULL,
                            PaymentMode varchar(50) DEFAULT NULL,
                            SponsorName varchar(100) DEFAULT NULL,
                            StudentGSTN varchar(50) DEFAULT NULL,
                            CourseName	varchar(250) DEFAULT NULL,
                            StudentName varchar(100) DEFAULT NULL,
                            EmailID varchar(100) DEFAULT NULL,
                            Mobile varchar(20) DEFAULT NULL,
                            StudentAddress varchar(250) DEFAULT NULL,
                            Remark varchar(100) DEFAULT NULL,
                            PGateway varchar(50) DEFAULT NULL,
                            AddedOn DATETIME DEFAULT CURRENT_TIMESTAMP,
                            hasAddon TINYINT(1) DEFAULT 0 NOT NULL,
                            isDefaultCourse TINYINT(1) DEFAULT 0 NOT NULL,
                            isDefaultCourseActive TINYINT(1) DEFAULT 0 NOT NULL,
                            invoice_path varchar(255) DEFAULT NULL
                           ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci`
                );
                dump("tbl_BillingTransactions created succesfully.")
            }

            // table creation for tbl_centerpagecourses table
            let checkCenterPageCourses = await checkTableExistOrNot('tbl_centerpagecourses');
            if (checkCenterPageCourses[0][0].count == 0) {
                await sequelize.query(
                    `CREATE TABLE tbl_centerpagecourses (
                          id bigint NOT NULL PRIMARY KEY AUTO_INCREMENT,
                          centerpageId bigint(20) DEFAULT 0,
                          billing_course_id varchar(250) DEFAULT NULL,
                          examType int(10) DEFAULT 0,
                          status TINYINT(1) DEFAULT 1 NOT NULL,
                          createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
                          updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP
                        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci`
                );
                dump("tbl_centerpagecourses created succesfully.")
            }


            // table creation for tbl_centerpagefaqs table
            let checkCenterPageFaqs = await checkTableExistOrNot('tbl_centerpagefaqs');
            if (checkCenterPageFaqs[0][0].count == 0) {
                await sequelize.query(
                    `CREATE TABLE tbl_centerpagefaqs (
                        id bigint NOT NULL PRIMARY KEY AUTO_INCREMENT,
                        centerpageId bigint DEFAULT 0,
                        faqId  bigint DEFAULT 0,
                        status TINYINT(1) DEFAULT 1 NOT NULL,
                        createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
                        updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP
                    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci`
                );
                dump("tbl_centerpagefaqs created succesfully.")
            }
            // table creation for tbl_centerpageimages table
            let checkCenterPageImages = await checkTableExistOrNot('tbl_centerpageimages');
            if (checkCenterPageImages[0][0].count == 0) {
                await sequelize.query(
                    `CREATE TABLE tbl_centerpageimages (
                        id bigint NOT NULL PRIMARY KEY AUTO_INCREMENT,
                        centerpageId bigint DEFAULT 0,
                        imageUrl varchar(254) DEFAULT NULL,
                        status TINYINT(1) DEFAULT 1 NOT NULL,
                        createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
                        updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP
                    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci`
                );
                dump("tbl_centerpageimages created succesfully.")
            }

            // table creation for tbl_centerpages table
            let checkCenterPages = await checkTableExistOrNot('tbl_centerpages');
            if (checkCenterPages[0][0].count == 0) {
                await sequelize.query(
                    `CREATE TABLE tbl_centerpages (
                        id bigint NOT NULL PRIMARY KEY AUTO_INCREMENT,
                        centerId bigint DEFAULT 0,
                        latitude varchar(15) DEFAULT NULL,
                        longitude varchar(15) DEFAULT NULL,
                        status TINYINT(1) DEFAULT 1 NOT NULL,
                        videoBankId int DEFAULT NULL,
                        introductionVideoURL varchar(254) DEFAULT NULL,
                        courseverticleId int DEFAULT 0,
                        createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
                        updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP
                    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci`
                );
                dump("tbl_centerpages created succesfully.")
            }

            // table creation for tbl_configs table
            let checkConfigs = await checkTableExistOrNot('tbl_configs');
            if (checkConfigs[0][0].count == 0) {
                await sequelize.query(
                    `CREATE TABLE tbl_configs (
                        id bigint NOT NULL PRIMARY KEY AUTO_INCREMENT,
                        value varchar(255) DEFAULT NULL,
                        createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
                        updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP
                    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci`
                );
                dump("tbl_configs created succesfully.")
            }

            // table creation for tbl_contactus table
            let checkContactUs = await checkTableExistOrNot('tbl_contactus');
            if (checkContactUs[0][0].count == 0) {
                await sequelize.query(
                    `CREATE TABLE tbl_contactus (
                        id bigint NOT NULL PRIMARY KEY AUTO_INCREMENT,
                        billingCourseId varchar(255) DEFAULT NULL,
                        centerId bigint DEFAULT NULL,
                        fullname varchar(254) DEFAULT NULL,
                        email varchar(254) DEFAULT NULL,
                        mobile varchar(50) DEFAULT NULL,
                        query TEXT DEFAULT NULL,
                        status TINYINT(1) DEFAULT 0,
                        createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
                        updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP
                    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci`
                );
                dump("tbl_contactus created succesfully.")
            }



            // table creation for tbl_coursebillingcourseassocitation table
            let checkCourseBillingCourseAssocitation = await checkTableExistOrNot('tbl_coursebillingcourseassocitation');
            if (checkCourseBillingCourseAssocitation[0][0].count == 0) {
                await sequelize.query(
                    `CREATE TABLE tbl_coursebillingcourseassocitation (
                        id bigint NOT NULL PRIMARY KEY AUTO_INCREMENT,
                        CourseId varchar(255) DEFAULT NULL,
                        BillingCourseId varchar(255) DEFAULT NULL,
                        Status TINYINT(1) DEFAULT 1 NOT NULL,
                        IsDeleted TINYINT(1) DEFAULT 0 NOT NULL,
                        createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
                    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci`
                );
                dump("tbl_coursebillingcourseassocitation created succesfully.")
            }
            // table creation for tbl_courseplatform table
            let checkCoursePlatform = await checkTableExistOrNot('tbl_courseplatform');
            if (checkCoursePlatform[0][0].count == 0) {
                await sequelize.query(
                    `CREATE TABLE tbl_courseplatform (
                        id bigint NOT NULL PRIMARY KEY AUTO_INCREMENT,
                        course_id varchar(100) DEFAULT NULL,
                        platform ENUM('Mobile', 'Tablet', 'Website') DEFAULT NULL,
                        status TINYINT(1) DEFAULT 1 NOT NULL,
                        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
                        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci`
                );
                dump("tbl_courseplatform created succesfully.")
            }

            // table creation for tbl_coursesubtypes table
            let checkCourseSubTypes = await checkTableExistOrNot('tbl_coursesubtypes');
            if (checkCourseSubTypes[0][0].count == 0) {
                await sequelize.query(
                    `CREATE TABLE tbl_coursesubtypes (
                        id bigint NOT NULL PRIMARY KEY AUTO_INCREMENT,
                        courseTypeId int DEFAULT NULL,
                        name varchar(254) DEFAULT NULL,
                        description varchar(254) DEFAULT NULL,
                        slug varchar(254) DEFAULT NULL,
                        status TINYINT(1) DEFAULT 1,
                        IsDeleted TINYINT(1) DEFAULT 0 NOT NULL,
                        createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
                        updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP
                        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci`
                );
                dump("tbl_coursesubtypes created succesfully.")
            }


            // table creation for tbl_courseverticlelanguages table
            let checkCourseVerticleLanguages = await checkTableExistOrNot('tbl_courseverticlelanguages');
            if (checkCourseVerticleLanguages[0][0].count == 0) {
                await sequelize.query(
                    'CREATE TABLE tbl_courseverticlelanguages (id bigint NOT NULL PRIMARY KEY AUTO_INCREMENT,courseverticleId int DEFAULT 0,language varchar(254) DEFAULT NULL,positiveMark int DEFAULT NULL,negativeMark int DEFAULT NULL,required TINYINT(1) DEFAULT 0,`option` int DEFAULT 4,status TINYINT(1) DEFAULT 1,createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci'
                );
                dump("tbl_courseverticlelanguages created succesfully.")
            }


            // table creation for tbl_courseverticles table
            let checkCourseVerticles = await checkTableExistOrNot('tbl_courseverticles');
            if (checkCourseVerticles[0][0].count == 0) {
                await sequelize.query(
                    `CREATE TABLE tbl_courseverticles (
                        id bigint NOT NULL PRIMARY KEY AUTO_INCREMENT,
                        Name varchar(255) DEFAULT NULL,
                        FullName varchar(255) DEFAULT NULL,
                        Status TINYINT(1) DEFAULT 1,
                        IsDeleted TINYINT(1) DEFAULT 0,
                        CreatedAt DATETIME DEFAULT CURRENT_TIMESTAMP
                    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci`
                );
                dump("tbl_courseverticles created succesfully.")
            }

            // table creation for tbl_dailyquiz table
            let checkDailyQuiz = await checkTableExistOrNot('tbl_dailyquiz');
            if (checkDailyQuiz[0][0].count == 0) {
                await sequelize.query(
                    `CREATE TABLE tbl_dailyquiz (
                        id bigint NOT NULL PRIMARY KEY AUTO_INCREMENT,
                        quizDate DATE DEFAULT NULL,
                        title varchar(254) DEFAULT  NULL,
                        status TINYINT(1) DEFAULT 1,
                        isDeleted TINYINT(1) DEFAULT 0,
                        createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
                        updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP
                    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci`
                );
                dump("tbl_dailyquiz created succesfully.")
            }


            // table creation for tbl_dailyquizquestions table
            let checkDailyQuizQuestions = await checkTableExistOrNot('tbl_dailyquizquestions');
            if (checkDailyQuizQuestions[0][0].count == 0) {
                await sequelize.query(
                    `CREATE TABLE tbl_dailyquizquestions (
                        id bigint NOT NULL PRIMARY KEY AUTO_INCREMENT,
                        dailyquizId bigint DEFAULT 0,
                        question LONGTEXT DEFAULT NULL,
                        correctOption varchar(20) DEFAULT NULL,
                        description LONGTEXT DEFAULT NULL,
                        optionA varchar(254) DEFAULT NULL,
                        optionB varchar(254) DEFAULT NULL,
                        optionC varchar(254) DEFAULT NULL,
                        optionD varchar(254) DEFAULT NULL,
                        status TINYINT(1) DEFAULT 1,
                        isDeleted TINYINT(1) DEFAULT 0,
                        createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
                        updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP
                    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci`
                );
                dump("tbl_dailyquizquestions created succesfully.")
            }

            // table creation for tbl_demolecture table
            let checkDemoLecture = await checkTableExistOrNot('tbl_demolecture');
            if (checkDemoLecture[0][0].count == 0) {
                await sequelize.query(
                    `CREATE TABLE tbl_demolecture (
                        id bigint NOT NULL PRIMARY KEY AUTO_INCREMENT,
                        billing_course_id varchar(254) DEFAULT  NULL,
                        lecture_id bigint DEFAULT 0 NOT NULL,
                        status TINYINT(1) DEFAULT 1 NOT NULL,
                        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
                    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci`
                );
                dump("tbl_demolecture created succesfully.")
            }

            // table creation for  tbl_evaluatorgrades table
            let checkEvaluarades = await checkTableExistOrNot('tbl_evaluatorgrades');
            if (checkEvaluarades[0][0].count == 0) {
                await sequelize.query(
                    `CREATE TABLE  tbl_evaluatorgrades (
                        id bigint NOT NULL PRIMARY KEY AUTO_INCREMENT,
                        grade varchar(50) DEFAULT  NULL,
                        slug varchar(50) DEFAULT  NULL,
                        price decimal(10,2) DEFAULT 0.00,
                        status TINYINT(1) DEFAULT 1,
                        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
                        updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP
                    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci`
                );
                dump(" tbl_evaluatorgrades created succesfully.")
            }

            // table creation for tbl_facultycources table
            let checkFacultyCources = await checkTableExistOrNot('tbl_facultycources');
            if (checkFacultyCources[0][0].count == 0) {
                await sequelize.query(
                    `CREATE TABLE tbl_facultycources (
                        id bigint NOT NULL PRIMARY KEY AUTO_INCREMENT,
                        faculty_id varchar(100) DEFAULT  NULL,
                        billing_course_id varchar(100) DEFAULT  NULL,
                        status TINYINT(1) DEFAULT 1 NOT NULL,
                        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
                    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci`
                );
                dump("tbl_facultycources created succesfully.")
            }

            // table creation for tbl_facultydemolectures table
            let checkFacultyDemoLectures = await checkTableExistOrNot('tbl_facultydemolectures');
            if (checkFacultyDemoLectures[0][0].count == 0) {
                await sequelize.query(
                    `CREATE TABLE tbl_facultydemolectures (
                        id bigint NOT NULL PRIMARY KEY AUTO_INCREMENT,
                        faculty_id varchar(100) DEFAULT  NULL,
                        lecture_id bigint DEFAULT 0 NOT NULL,
                        status TINYINT(1) DEFAULT 1 NOT NULL,
                        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
                    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci`
                );
                dump("tbl_facultydemolectures created succesfully.")
            }


            // table creation for tbl_faq table
            let checkFaq = await checkTableExistOrNot('tbl_faq');
            if (checkFaq[0][0].count == 0) {
                await sequelize.query(
                    `CREATE TABLE tbl_faq (
                        id bigint NOT NULL PRIMARY KEY AUTO_INCREMENT,
                        type TINYINT(1) DEFAULT 0 NOT NULL COMMENT '0 => faq, 1 => core take away',
                        title varchar(255) DEFAULT  NULL,
                        image varchar(255) DEFAULT  NULL,
                        orders int DEFAULT 0 NOT NULL,
                        is_default int DEFAULT 0,
                        question TEXT DEFAULT NULL,
                        answer TEXT DEFAULT NULL,
                        lecture_id bigint DEFAULT 0 NOT NULL,
                        status TINYINT(1) DEFAULT 1 NOT NULL,
                        is_deleted TINYINT(1) DEFAULT 0 NOT NULL,
                        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
                    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci`
                );
                dump("tbl_faq created succesfully.")
            }
            // table creation for tbl_faqmodules table
            let checkFaqModules = await checkTableExistOrNot('tbl_faqmodules');
            if (checkFaqModules[0][0].count == 0) {
                await sequelize.query(
                    `CREATE TABLE tbl_faqmodules (
                        id bigint NOT NULL PRIMARY KEY AUTO_INCREMENT,
                        faq_id bigint DEFAULT 0 NOT NULL,
                        module_id int DEFAULT 0 NULL,
                        module varchar(100) DEFAULT  NULL,
                        status TINYINT(1) DEFAULT 1 NOT NULL,
                        is_deleted TINYINT(1) DEFAULT 0 NOT NULL,
                        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
                    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci`
                );
                dump("tbl_faqmodules created succesfully.")
            }

            // table creation for tbl_faqtags table
            let checkFaqTags = await checkTableExistOrNot('tbl_faqtags');
            if (checkFaqTags[0][0].count == 0) {
                await sequelize.query(
                    `CREATE TABLE tbl_faqtags (
                        id bigint NOT NULL PRIMARY KEY AUTO_INCREMENT,
                        faq_id bigint DEFAULT 0 NOT NULL,
                        tag_name varchar(255) DEFAULT  NULL,
                        status TINYINT(1) DEFAULT 1 NOT NULL,
                        is_deleted TINYINT(1) DEFAULT 0 NOT NULL,
                        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
                    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci`
                );
                dump("tbl_faqtags created succesfully.")
            }

            // table creation for tbl_gst table
            let checkGst = await checkTableExistOrNot('tbl_gst');
            if (checkGst[0][0].count == 0) {
                await sequelize.query(
                    `CREATE TABLE tbl_gst (
                        id bigint NOT NULL PRIMARY KEY AUTO_INCREMENT,
                        title varchar(255) DEFAULT  NULL,
                        value varchar(10) DEFAULT  NULL,
                        status TINYINT(1) DEFAULT 1 NOT NULL,
                        is_deleted TINYINT(1) DEFAULT 0 NOT NULL,
                        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
                    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci`
                );
                dump("tbl_gst created succesfully.")
            }

            // table creation for tbl_lectureviewlistlogs table
            let checkLectureViewListLogs = await checkTableExistOrNot('tbl_lectureviewlistlogs');
            if (checkLectureViewListLogs[0][0].count == 0) {
                await sequelize.query(
                    `CREATE TABLE tbl_lectureviewlistlogs (
                        id bigint NOT NULL PRIMARY KEY AUTO_INCREMENT,
                        lectureviewlistId varchar(255) DEFAULT  NULL,
                        userId varchar(254) DEFAULT NULL,
                        courseId varchar(254) DEFAULT NULL,
                        Platform varchar(254) DEFAULT  NULL,
                        playTime FLOAT(12,2) DEFAULT 0.00,
                        IPAddress varchar(100) DEFAULT NULL,
                        createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
                        updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP
                    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci`
                );
                dump("tbl_lectureviewlistlogs created succesfully.")
            }

            // table creation for tbl_lectureviewlists table
            let checkLectureViewLists = await checkTableExistOrNot('tbl_lectureviewlists');
            if (checkLectureViewLists[0][0].count == 0) {
                await sequelize.query(
                    `CREATE TABLE tbl_lectureviewlists (
                        id bigint NOT NULL PRIMARY KEY AUTO_INCREMENT,
                        isPlaying TINYINT(1) DEFAULT 0 NOT NULL,
                        lectureviewId bigint DEFAULT 0,
                        onDemand TINYINT(1) DEFAULT 0 NOT NULL,
                        userId varchar(254) DEFAULT NULL,
                        courseId varchar(254) DEFAULT NULL,
                        lectureId bigint DEFAULT 0,
                        lectureOrder int DEFAULT 0,
                        timeAllocated int DEFAULT 0,
                        lastPlay varchar(254) DEFAULT NULL,
                        skiped TINYINT(1) DEFAULT 0,
                        remainingTime int DEFAULT 0,
                        TotalPlayedTime varchar(100) DEFAULT NULL,
                        TotalCoverdTime int DEFAULT 0,
                        Platform varchar(100) DEFAULT NULL,
                        IPAddress varchar(50) DEFAULT NULL,
                        endDate	DATETIME DEFAULT NULL,  
                        createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
                        updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP,
                        sectionId varchar(100) DEFAULT NULL
                    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci`
                );
                dump("tbl_lectureviewlists created succesfully.")
            }

            // table creation for tbl_lectureviews table
            let checkLectureViews = await checkTableExistOrNot('tbl_lectureviews');
            if (checkLectureViews[0][0].count == 0) {
                await sequelize.query(
                    `CREATE TABLE tbl_lectureviews (
                        id bigint NOT NULL PRIMARY KEY AUTO_INCREMENT,
                        userId varchar(254) DEFAULT NULL,
                        courseId varchar(254) DEFAULT NULL,
                        TotalTimeAllocated int DEFAULT 0,
                        updatedTotalTimeAllocated int DEFAULT NULL,
                        onDemand TINYINT(1) DEFAULT 0 NOT NULL,
                        remainingTime int DEFAULT 0,
                        createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
                        updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP
                    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci`
                );
                dump("tbl_lectureviews created succesfully.")
            }
            // table creation for tbl_livelecturechannels table
            let checkLiveLectureChannels = await checkTableExistOrNot('tbl_livelecturechannels');
            if (checkLiveLectureChannels[0][0].count == 0) {
                await sequelize.query(
                    `CREATE TABLE tbl_livelecturechannels (
                        id bigint NOT NULL PRIMARY KEY AUTO_INCREMENT,
                        name varchar(254) DEFAULT NULL,
                        slug varchar(254) DEFAULT NULL,
                        link varchar(254) DEFAULT NULL,
                        status TINYINT(1) DEFAULT 1,
                        type varchar(254) DEFAULT NULL
                    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci`
                );
                dump("tbl_livelecturechannels created succesfully.")
            }

            // table creation for tbl_ourprograms table
            let checkOurPrograms = await checkTableExistOrNot('tbl_ourprograms');
            if (checkOurPrograms[0][0].count == 0) {
                await sequelize.query(
                    `CREATE TABLE tbl_ourprograms (
                        id bigint NOT NULL PRIMARY KEY AUTO_INCREMENT,
                        type ENUM('online', 'classroom', 'regional', 'mobile') DEFAULT NULL,
                        description text DEFAULT NULL,
                        price float(10,2) DEFAULT NULL,
                        benifitOne text DEFAULT NULL,
                        benifitTwo text DEFAULT NULL,
                        benifitThree text DEFAULT NULL,
                        benifitFour text DEFAULT NULL,
                        redirectUrl varchar(100) DEFAULT NULL,
                        center_id int DEFAULT 0,
                        createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
                        status TINYINT(1) DEFAULT 1,
                        isDeleted TINYINT(1) DEFAULT 0
                    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci`
                );
                dump("tbl_ourprograms created succesfully.")
            }

            // table creation for tbl_papers table
            let checkPapers = await checkTableExistOrNot('tbl_papers');
            if (checkPapers[0][0].count == 0) {
                await sequelize.query(
                    `CREATE TABLE tbl_papers (
                        id bigint NOT NULL PRIMARY KEY AUTO_INCREMENT,
                        name varchar(255) DEFAULT NULL,
                        type int DEFAULT 0,
                        center_id int DEFAULT 0,
                        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
                    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci`
                );
                dump("tbl_papers created succesfully.")
            }

            // table creation for tbl_practisetestuserresultlogs table
            let checkPractiseTestUserResultLogs = await checkTableExistOrNot('tbl_practisetestuserresultlogs');
            if (checkPractiseTestUserResultLogs[0][0].count == 0) {
                await sequelize.query(
                    `CREATE TABLE tbl_practisetestuserresultlogs (
                        id bigint NOT NULL PRIMARY KEY AUTO_INCREMENT,
                        userid varchar(100) DEFAULT  NULL,
                        ptestid varchar(100) DEFAULT NULL,
                        questionid bigint DEFAULT NULL,
                        qanswer varchar(50) DEFAULT NULL,
                        IsCorrectAnswer TINYINT UNSIGNED DEFAULT NULL,
                        testduration INT DEFAULT NULL,
                        addedon DATETIME DEFAULT NULL,
                        qoption varchar(50) DEFAULT NULL,
                        language varchar(100) DEFAULT 'ENGLISH'
                    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci`
                );
                dump("tbl_practisetestuserresultlogs created succesfully.")
            }

            // table creation for tbl_recommendedcourse table
            let checkRecommendedCourse = await checkTableExistOrNot('tbl_recommendedcourse');
            if (checkRecommendedCourse[0][0].count == 0) {
                await sequelize.query(
                    `CREATE TABLE tbl_recommendedcourse (
                        id bigint NOT NULL PRIMARY KEY AUTO_INCREMENT,
                        billing_course_id varchar(100) DEFAULT  NULL,
                        recommended_course_id varchar(100) DEFAULT NULL,
                        status TINYINT(1) DEFAULT 1 NOT NULL,
                        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
                    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci`
                );
                dump("tbl_recommendedcourse created succesfully.")
            }

            // table creation for tbl_roleaccess table
            let checkRoleAccess = await checkTableExistOrNot('tbl_roleaccess');
            if (checkRoleAccess[0][0].count == 0) {
                await sequelize.query(
                    `CREATE TABLE tbl_roleaccess (
                        id bigint NOT NULL PRIMARY KEY AUTO_INCREMENT,
                        role_id int DEFAULT 0 NOT NULL,
                        access_name varchar(100) DEFAULT NULL,
                        access_code int DEFAULT 0,
                        status TINYINT(1) DEFAULT 1,
                        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
                    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci`
                );
                dump("tbl_roleaccess created succesfully.")
            }

            // table creation for tbl_selectedaddons table
            let checkSelectedAddons = await checkTableExistOrNot('tbl_selectedaddons');
            if (checkSelectedAddons[0][0].count == 0) {
                await sequelize.query(
                    `CREATE TABLE tbl_selectedaddons (
                        billing_course_id varchar(100) DEFAULT NULL,
                        user_id varchar(100) DEFAULT NULL,
                        addon_id int DEFAULT 0,
                        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
                    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci`
                );
                dump("tbl_selectedaddons created succesfully.")
            }

            // table creation for tbl_teachercenters table
            let checkTeacherCenters = await checkTableExistOrNot('tbl_teachercenters');
            if (checkTeacherCenters[0][0].count == 0) {
                await sequelize.query(
                    `CREATE TABLE tbl_teachercenters (
                        id bigint NOT NULL PRIMARY KEY AUTO_INCREMENT,
                        faculty_id varchar(100) DEFAULT NULL,
                        center_id int DEFAULT 0,
                        status TINYINT(1) DEFAULT 1,
                        is_deleted TINYINT(1) DEFAULT 0,
                        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
                    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci`
                );
                dump("tbl_teachercenters created succesfully.")
            }


            // table creation for tbl_teachersubject table
            let checkTeacherSubject = await checkTableExistOrNot('tbl_teachersubject');
            if (checkTeacherSubject[0][0].count == 0) {
                await sequelize.query(
                    `CREATE TABLE tbl_teachersubject (
                        id bigint NOT NULL PRIMARY KEY AUTO_INCREMENT,
                        faculty_id varchar(100) DEFAULT NULL,
                        subject_id int DEFAULT 0 NULL,
                        status TINYINT(1) DEFAULT 1 NOT NULL,
                        is_deleted TINYINT(1) DEFAULT 0 NOT NULL,
                        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
                    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci`
                );
                dump("tbl_teachersubject created succesfully.")
            }


            // table creation for tbl_testimonials table
            let checkTestimonials = await checkTableExistOrNot('tbl_testimonials');
            if (checkTestimonials[0][0].count == 0) {
                await sequelize.query(
                    `CREATE TABLE tbl_testimonials (
                        id bigint NOT NULL PRIMARY KEY AUTO_INCREMENT,
                        title varchar(255) DEFAULT NULL,
                        description text DEFAULT NULL,
                        studentName varchar(255) DEFAULT NULL,
                        media varchar(255) DEFAULT NULL,
                        studentImage varchar(255) DEFAULT NULL,
                        yearOfStudy int DEFAULT 0 NOT NULL,
                        centerOfStudy varchar(255) DEFAULT NULL,
                        status TINYINT(1) DEFAULT 1 NOT NULL,
                        isdeleted TINYINT(1) DEFAULT 0 NOT NULL,
                        createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
                    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci`
                );
                dump("tbl_testimonials created succesfully.")
            }
            // table creation for tbl_toppercenters table
            let checkTopperCenters = await checkTableExistOrNot('tbl_toppercenters');
            if (checkTopperCenters[0][0].count == 0) {
                await sequelize.query(
                    `CREATE TABLE tbl_toppercenters (
                        id bigint NOT NULL PRIMARY KEY AUTO_INCREMENT,
                        TopperID varchar(254) DEFAULT NULL,
                        centerId int DEFAULT 0,
                        status TINYINT(1) DEFAULT 1
                    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci`
                );
                dump("tbl_toppercenters created succesfully.")
            }

            // table creation for tbl_upcomingcourseexam table
            let checkUpcomingCourseExam = await checkTableExistOrNot('tbl_upcomingcourseexam');
            if (checkUpcomingCourseExam[0][0].count == 0) {
                await sequelize.query(
                    `CREATE TABLE tbl_upcomingcourseexam (
                        id bigint NOT NULL PRIMARY KEY AUTO_INCREMENT,
                        exam_type_id bigint DEFAULT 0 NOT NULL,
                        billing_course_id varchar(100) DEFAULT NULL,
                        status TINYINT(1) DEFAULT 1 NOT NULL,
                        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
                    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci`
                );
                dump("tbl_upcomingcourseexam created succesfully.")
            }


            // table creation for tbl_userloginhistory table
            let checkUserLoginHistory = await checkTableExistOrNot('tbl_userloginhistory');
            if (checkUserLoginHistory[0][0].count == 0) {
                await sequelize.query(
                    `CREATE TABLE tbl_userloginhistory (
                        id bigint NOT NULL PRIMARY KEY AUTO_INCREMENT,
                        isKnox TINYINT DEFAULT 0 NOT NULL,
                        studentId varchar(254) DEFAULT NULL,
                        access_token text DEFAULT NULL,
                        device varchar(100) DEFAULT NULL,
                        type varchar(100) DEFAULT NULL,
                        OS varchar(100) DEFAULT NULL,
                        version varchar(100) DEFAULT NULL,
                        IPaddress varchar(100) DEFAULT NULL,
                        deviceId varchar(100) DEFAULT NULL,
                        deviceName varchar(100) DEFAULT NULL,
                        deviceToken varchar(254) DEFAULT NULL,
                        userType varchar(100) DEFAULT NULL,
                        createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
                    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci`
                );
                dump("tbl_userloginhistory created succesfully.")
            }
            // table creation for tbl_userloguthistory table
            let checkUserLogutHistory = await checkTableExistOrNot('tbl_userloguthistory');
            if (checkUserLogutHistory[0][0].count == 0) {
                await sequelize.query(
                    `CREATE TABLE tbl_userloguthistory (
                        id bigint NOT NULL PRIMARY KEY AUTO_INCREMENT,
                        studentId varchar(254) DEFAULT NULL,
                        isKnox TINYINT DEFAULT 0 NOT NULL,
                        access_token text DEFAULT NULL,
                        device varchar(50) DEFAULT NULL,
                        type varchar(50) DEFAULT NULL,
                        OS varchar(50) DEFAULT NULL,
                        version varchar(100) DEFAULT NULL,
                        IPaddress varchar(50) DEFAULT NULL,
                        deviceId varchar(100) DEFAULT NULL,
                        deviceName varchar(100) DEFAULT NULL,
                        userType varchar(100) DEFAULT NULL,
                        createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
                    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci`
                );
                dump("tbl_userloguthistory created succesfully.")
            }
            // table creation for tbl_videobankmastermodules table
            let checkVideoBankMasterModules = await checkTableExistOrNot('tbl_videobankmastermodules');
            if (checkVideoBankMasterModules[0][0].count == 0) {
                await sequelize.query(
                    `CREATE TABLE tbl_videobankmastermodules (
                        id bigint NOT NULL PRIMARY KEY AUTO_INCREMENT,
                        moduleName varchar(254) DEFAULT NULL,
                        status TINYINT DEFAULT 1 NOT NULL,
                        isdeleted TINYINT DEFAULT 1 NOT NULL,
                        AddedOn DATETIME DEFAULT CURRENT_TIMESTAMP
                    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci`
                );
                dump("tbl_videobankmastermodules created succesfully.")
            }

            // table creation for tbl_videobankmasters table
            let checkVideoBankMasters = await checkTableExistOrNot('tbl_videobankmasters');
            if (checkVideoBankMasters[0][0].count == 0) {
                await sequelize.query(
                    `CREATE TABLE tbl_videobankmasters (
                        videoId bigint NOT NULL PRIMARY KEY AUTO_INCREMENT,
                        isWebsiteVideo TINYINT(1) DEFAULT 1 NOT NULL,
                        isVdoCipherVideo TINYINT(1) DEFAULT 0 NOT NULL,
                        videoTitle varchar(254) DEFAULT NULL,
                        videoDuration int DEFAULT NULL,
                        videoPlateform varchar(254) DEFAULT NULL,
                        videoURL varchar(254) DEFAULT NULL,
                        videoThumbnail varchar(254) DEFAULT NULL,
                        videoDescription varchar(254) DEFAULT NULL,
                        status TINYINT DEFAULT 1,
                        isdeleted TINYINT DEFAULT 0,
                        AddedOn DATETIME DEFAULT CURRENT_TIMESTAMP
                    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci`
                );
                dump("tbl_videobankmasters created succesfully.")
            }
            // table creation for tbl_videobankmodules table
            let checkVideoBankModules = await checkTableExistOrNot('tbl_videobankmodules');
            if (checkVideoBankModules[0][0].count == 0) {
                await sequelize.query(
                    `CREATE TABLE tbl_videobankmodules (
                        id bigint NOT NULL PRIMARY KEY AUTO_INCREMENT,
                        videoBankId bigint DEFAULT 0,
                        masterModuleId bigint DEFAULT 0,
                        AddedOn DATETIME DEFAULT CURRENT_TIMESTAMP
                    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci`
                );
                dump("tbl_videobankmodules created succesfully.")
            }
            // table creation for tbl_videobanktags table
            let checkVideoBankTags = await checkTableExistOrNot('tbl_videobanktags');
            if (checkVideoBankTags[0][0].count == 0) {
                await sequelize.query(
                    `CREATE TABLE tbl_videobanktags (
                        id bigint NOT NULL PRIMARY KEY AUTO_INCREMENT,
                        videoBankId bigint DEFAULT 0,
                        tagName varchar(254) DEFAULT NULL,
                        AddedOn DATETIME DEFAULT CURRENT_TIMESTAMP
                    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci`
                );
                dump("tbl_videobanktags created succesfully.")
            }



            // table creation for why_join_us table
            let checkWhy_join_us = await checkTableExistOrNot('why_join_us');
            if (checkWhy_join_us[0][0].count == 0) {
                await sequelize.query(
                    `CREATE TABLE why_join_us (
                        id int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
                        question varchar(255) DEFAULT NULL,
                        title varchar(255) DEFAULT NULL,
                        description text DEFAULT NULL,
                        image varchar(255) DEFAULT NULL,
                        video varchar(255) DEFAULT NULL,
                        url varchar(255) DEFAULT NULL,
                        status TINYINT DEFAULT 1 NOT NULL,
                        isDeleted TINYINT DEFAULT 0 NOT NULL,
                        createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
                    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci`
                );
                dump("why_join_us created succesfully.")
            }

            return successRes(res, 'Success', {});
        } catch (error) {
            dump({ error })
            return failedRes(res, error.message);
        }
    },

    // alteration of tables
    alterTable: async (req, res) => {
        try {
            // table tbl_adminusers columns 
            let checkAdminUser = await checkTableExistOrNot('tbl_adminusers');
            if (checkAdminUser[0][0].count == 1) {
                let video = await checkTableColumnExistOrNot('tbl_adminusers', 'video');
                if (video[0].length == 0) {
                    await sequelize.query(
                        `ALTER TABLE tbl_adminusers ADD video VARCHAR(255) NULL AFTER Times;`
                    );
                    dump("table tbl_adminusers, column video updated succesfully.")
                }
                let videoId = await checkTableColumnExistOrNot('tbl_adminusers', 'videoId');
                if (videoId[0].length == 0) {
                    await sequelize.query(
                        `ALTER TABLE tbl_adminusers ADD videoId BIGINT(20) NOT NULL DEFAULT 0 AFTER video;`
                    );
                    dump("table tbl_adminusers, column videoId updated succesfully.")
                }
                let is_youtube = await checkTableColumnExistOrNot('tbl_adminusers', 'is_youtube');
                if (is_youtube[0].length == 0) {
                    await sequelize.query(
                        `ALTER TABLE tbl_adminusers ADD is_youtube TINYINT(1) NOT NULL DEFAULT 1 AFTER videoId;`
                    );
                    dump("table tbl_adminusers, column is_youtube updated succesfully.")
                }
                let teacherIntro = await checkTableColumnExistOrNot('tbl_adminusers', 'teacherIntro');
                if (teacherIntro[0].length == 0) {
                    await sequelize.query(
                        `ALTER TABLE tbl_adminusers ADD teacherIntro TEXT NULL DEFAULT NULL AFTER is_youtube;`
                    );
                    dump("table tbl_adminusers, column teacherIntro updated succesfully.")
                }

                let courseCategoryId = await checkTableColumnExistOrNot('tbl_adminusers', 'courseCategoryId');
                if (courseCategoryId[0].length == 0) {
                    await sequelize.query(
                        `ALTER TABLE tbl_adminusers ADD courseCategoryId BIGINT(20) NULL DEFAULT NULL AFTER teacherIntro;`
                    );
                    dump("table tbl_adminusers, column courseCategoryId updated succesfully.")
                }
                dump("table tbl_adminusers updated succesfully.")
            }

            // table tbl_centers columns 
            let checkCenters = await checkTableExistOrNot('tbl_centers');
            if (checkCenters[0][0].count == 1) {
                let code = await checkTableColumnExistOrNot('tbl_centers', 'code');
                if (code[0].length == 0) {
                    await sequelize.query(
                        `ALTER TABLE tbl_centers ADD code VARCHAR(100) NULL DEFAULT NULL AFTER Timing;`
                    );
                    dump("table tbl_centers, column code updated succesfully.")
                }
                let status = await checkTableColumnExistOrNot('tbl_centers', 'status');
                if (status[0].length == 0) {
                    await sequelize.query(
                        `ALTER TABLE tbl_centers ADD status TINYINT(1) NOT NULL DEFAULT 1 AFTER code;`
                    );
                    dump("table tbl_centers, column status updated succesfully.")
                }
                let is_deleted = await checkTableColumnExistOrNot('tbl_centers', 'is_deleted');
                if (is_deleted[0].length == 0) {
                    await sequelize.query(
                        `ALTER TABLE tbl_centers ADD is_deleted TINYINT(1) NOT NULL DEFAULT 0 AFTER status;`
                    );
                    dump("table tbl_centers, column is_deleted updated succesfully.")
                }
                dump("table tbl_centers updated succesfully.")
            }

            // table tbl_courselectures columns
            let checkCourseLectures = await checkTableExistOrNot('tbl_courselectures');
            if (checkCourseLectures[0][0].count == 1) {
                let duration = await checkTableColumnExistOrNot('tbl_courselectures', 'duration');
                if (duration[0].length == 0) {
                    await sequelize.query(
                        `ALTER TABLE tbl_courselectures ADD duration VARCHAR(100) NULL DEFAULT NULL AFTER addedon;`
                    );
                    dump("table tbl_courselectures, column duration updated succesfully.")
                }
                let dateScheduled = await checkTableColumnExistOrNot('tbl_courselectures', 'dateScheduled');
                if (dateScheduled[0].length == 0) {
                    await sequelize.query(
                        `ALTER TABLE tbl_courselectures ADD dateScheduled DATETIME NULL DEFAULT NULL AFTER duration;`
                    );
                    dump("table tbl_courselectures, column dateScheduled updated succesfully.")
                }
                let lectureenddate = await checkTableColumnExistOrNot('tbl_courselectures', 'lectureenddate');
                if (lectureenddate[0].length == 0) {
                    await sequelize.query(
                        `ALTER TABLE tbl_courselectures ADD lectureenddate DATETIME NULL DEFAULT NULL AFTER dateScheduled;`
                    );
                    dump("table tbl_courselectures, column lectureenddate updated succesfully.")
                }
                let AllocatedTime = await checkTableColumnExistOrNot('tbl_courselectures', 'AllocatedTime');
                if (AllocatedTime[0].length == 0) {
                    await sequelize.query(
                        `ALTER TABLE tbl_courselectures ADD AllocatedTime VARCHAR(20) NULL DEFAULT NULL AFTER lectureenddate;`
                    );
                    dump("table tbl_courselectures, column AllocatedTime updated succesfully.")
                }
                let section_id = await checkTableColumnExistOrNot('tbl_courselectures', 'section_id');
                if (section_id[0].length == 0) {
                    await sequelize.query(
                        `ALTER TABLE tbl_courselectures ADD section_id VARCHAR(255) NULL DEFAULT NULL AFTER AllocatedTime;`
                    );
                    dump("table tbl_courselectures, column section_id updated succesfully.")
                }
                dump("table tbl_courselectures updated succesfully.")
            }

            // table tbl_courselivelectureschedule columns
            let checkCourseLiveLectureSchedule = await checkTableExistOrNot('tbl_courselivelectureschedule');
            if (checkCourseLiveLectureSchedule[0][0].count == 1) {
                let endDateTime = await checkTableColumnExistOrNot('tbl_courselivelectureschedule', 'endDateTime');
                if (endDateTime[0].length == 0) {
                    await sequelize.query(
                        `ALTER TABLE tbl_courselivelectureschedule ADD endDateTime DATETIME NULL DEFAULT NULL AFTER ChatStatus;`
                    );
                    dump("table tbl_courselivelectureschedule, column endDateTime updated succesfully.")
                }

                dump("table tbl_courselivelectureschedule updated succesfully.")
            }

            // table tbl_courses columns
            let checkCourse = await checkTableExistOrNot('tbl_courses');
            if (checkCourse[0][0].count == 1) {
                //1
                let isDefault = await checkTableColumnExistOrNot('tbl_courses', 'isDefault');
                if (isDefault[0].length == 0) {
                    await sequelize.query(
                        `ALTER TABLE tbl_courses ADD isDefault TINYINT(1) NOT NULL DEFAULT 0 AFTER ExpLectures;`
                    );
                    dump("table tbl_courses, column isDefault updated succesfully.")
                }
                //2
                let CourseFor = await checkTableColumnExistOrNot('tbl_courses', 'CourseFor');
                if (CourseFor[0].length == 0) {
                    await sequelize.query(
                        `ALTER TABLE tbl_courses ADD CourseFor INT(10) NOT NULL DEFAULT 0 AFTER isDefault`
                    );
                    dump("table tbl_courses, column CourseFor updated succesfully.")
                }
                //3
                let StateId = await checkTableColumnExistOrNot('tbl_courses', 'StateId');
                if (StateId[0].length == 0) {
                    await sequelize.query(
                        `ALTER TABLE tbl_courses ADD StateId INT(10) NOT NULL DEFAULT 0 AFTER CourseFor;`
                    );
                    dump("table tbl_courses, column StateId updated succesfully.")
                }
                //4
                let CourseAdminID = await checkTableColumnExistOrNot('tbl_courses', 'CourseAdminID');
                if (CourseAdminID[0].length == 0) {
                    await sequelize.query(
                        `ALTER TABLE tbl_courses ADD CourseAdminID VARCHAR(100) NULL DEFAULT NULL AFTER StateId;`
                    );
                    dump("table tbl_courses, column CourseAdminID updated succesfully.")
                }
                //4
                let LectureTime = await checkTableColumnExistOrNot('tbl_courses', 'LectureTime');
                if (LectureTime[0].length == 0) {
                    await sequelize.query(
                        `ALTER TABLE tbl_courses ADD LectureTime VARCHAR(100) NULL DEFAULT NULL AFTER TotalLectures;`
                    );
                    dump("table tbl_courses, column LectureTime updated succesfully.")
                }
                //5
                let Language = await checkTableColumnExistOrNot('tbl_courses', 'Language');
                if (Language[0].length == 0) {
                    await sequelize.query(
                        `ALTER TABLE tbl_courses ADD Language ENUM('1','2') NULL DEFAULT NULL COMMENT '1 => english, 2 => hindi' AFTER CourseAdminID;`
                    );
                    dump("table tbl_courses, column Language updated succesfully.")
                }
                //6
                let image = await checkTableColumnExistOrNot('tbl_courses', 'image');
                if (image[0].length == 0) {
                    await sequelize.query(
                        `ALTER TABLE tbl_courses ADD image VARCHAR(255) NULL DEFAULT NULL AFTER Language;`
                    );
                    dump("table tbl_courses, column image updated succesfully.")
                }
                //7
                let ShowPSIRSectionalTestsBeforePrelims = await checkTableColumnExistOrNot('tbl_courses', 'ShowPSIRSectionalTests(beforePrelims)');
                if (ShowPSIRSectionalTestsBeforePrelims[0].length != 0) {
                    await sequelize.query(
                        'ALTER TABLE `tbl_courses` CHANGE `ShowPSIRSectionalTests(beforePrelims)` `ShowPSIRSectionalTestsBeforePrelims` TINYINT(1) NULL DEFAULT NULL;'
                    );
                    dump("table tbl_courses, column ShowPSIRSectionalTestsBeforePrelims updated succesfully.")
                }

                dump("table tbl_courses updated succesfully.")
            }

            // table tbl_coursetests columns
            let checkCourseTest = await checkTableExistOrNot('tbl_coursetests');
            if (checkCourseTest[0][0].count == 1) {
                let customscheduleDate = await checkTableColumnExistOrNot('tbl_coursetests', 'customscheduleDate');
                if (customscheduleDate[0].length == 0) {
                    await sequelize.query(
                        `ALTER TABLE tbl_coursetests ADD customscheduleDate DATETIME NULL DEFAULT NULL AFTER AddedOn;`
                    );
                    dump("table tbl_coursetests, column customscheduleDate updated succesfully.")
                }

                let customId = await checkTableColumnExistOrNot('tbl_coursetests', 'customId');
                if (customId[0].length == 0) {
                    await sequelize.query(
                        `ALTER TABLE tbl_coursetests ADD customId BIGINT NOT NULL AFTER customscheduleDate;`
                    );
                    dump("table tbl_coursetests, column customId updated succesfully.")
                }

                let TestType = await checkTableColumnExistOrNot('tbl_coursetests', 'TestType');
                if (TestType[0].length == 0) {
                    await sequelize.query(
                        `ALTER TABLE tbl_coursetests ADD TestType VARCHAR(255) NULL DEFAULT NULL AFTER customId;`
                    );
                    dump("table tbl_coursetests, column TestType updated succesfully.")
                }

                let TestSubType = await checkTableColumnExistOrNot('tbl_coursetests', 'TestSubType');
                if (TestSubType[0].length == 0) {
                    await sequelize.query(
                        `ALTER TABLE tbl_coursetests ADD TestSubType VARCHAR(255) NULL DEFAULT NULL AFTER TestType;`
                    );
                    dump("table tbl_coursetests, column TestSubType updated succesfully.")
                }

                let ClassTestCategory = await checkTableColumnExistOrNot('tbl_coursetests', 'ClassTestCategory');
                if (ClassTestCategory[0].length == 0) {
                    await sequelize.query(
                        `ALTER TABLE tbl_coursetests ADD ClassTestCategory VARCHAR(255) NULL DEFAULT NULL AFTER TestSubType;`
                    );
                    dump("table tbl_coursetests, column ClassTestCategory updated succesfully.")
                }

                let language = await checkTableColumnExistOrNot('tbl_coursetests', 'language');
                if (language[0].length == 0) {
                    await sequelize.query(
                        `ALTER TABLE tbl_coursetests ADD language VARCHAR(255) NULL DEFAULT NULL AFTER ClassTestCategory;`
                    );
                    dump("table tbl_coursetests, column language updated succesfully.")
                }

                let status = await checkTableColumnExistOrNot('tbl_coursetests', 'status');
                if (status[0].length == 0) {
                    await sequelize.query(
                        `ALTER TABLE tbl_coursetests ADD status TINYINT(1) NOT NULL DEFAULT 1 AFTER language;`
                    );
                    dump("table tbl_coursetests, column status updated succesfully.")
                }

                dump("table tbl_coursetests updated succesfully.")
            }

            // table tbl_coursetypes columns
            let checkCourseTestType = await checkTableExistOrNot('tbl_coursetypes');
            if (checkCourseTestType[0][0].count == 1) {
                let verticle_id = await checkTableColumnExistOrNot('tbl_coursetypes', 'verticle_id');
                if (verticle_id[0].length == 0) {
                    await sequelize.query(
                        `ALTER TABLE tbl_coursetypes ADD verticle_id INT(10) NOT NULL DEFAULT '0' AFTER AddedOn;`
                    );
                    dump("table tbl_coursetypes, column verticle_id updated succesfully.")
                }

                let CourseTypeAdminId = await checkTableColumnExistOrNot('tbl_coursetypes', 'CourseTypeAdminId');
                if (CourseTypeAdminId[0].length == 0) {
                    await sequelize.query(
                        `ALTER TABLE tbl_coursetypes ADD CourseTypeAdminId VARCHAR(255) NULL DEFAULT NULL AFTER verticle_id;`
                    );
                    dump("table tbl_coursetypes, column CourseTypeAdminId updated succesfully.")
                }

                let SRCode = await checkTableColumnExistOrNot('tbl_coursetypes', 'SRCode');
                if (SRCode[0].length == 0) {
                    await sequelize.query(
                        `ALTER TABLE tbl_coursetypes ADD SRCode VARCHAR(255) NULL DEFAULT NULL AFTER CourseTypeAdminId;`
                    );
                    dump("table tbl_coursetypes, column SRCode updated succesfully.")
                }

                let RCCode = await checkTableColumnExistOrNot('tbl_coursetypes', 'RCCode');
                if (RCCode[0].length == 0) {
                    await sequelize.query(
                        `ALTER TABLE tbl_coursetypes ADD RCCode VARCHAR(255) NULL DEFAULT NULL AFTER SRCode;`
                    );
                    dump("table tbl_coursetypes, column RCCode updated succesfully.")
                }

                dump("table tbl_coursetypes updated succesfully.")
            }

            // table tbl_discountcoupons columns
            let checkDiscountCoupons = await checkTableExistOrNot('tbl_discountcoupons');
            if (checkDiscountCoupons[0][0].count == 1) {
                let isactive = await checkTableColumnExistOrNot('tbl_discountcoupons', 'isactive');
                if (isactive[0].length == 0) {
                    await sequelize.query(
                        `ALTER TABLE tbl_discountcoupons ADD isactive TINYINT(1) NOT NULL DEFAULT 1 AFTER addedon;`
                    );
                    dump("table tbl_discountcoupons, column isactive updated succesfully.")
                }

                dump("table tbl_coursetypes updated succesfully.")
            }

            // table tbl_exceptionallectureaccess columns
            let checkExceptionalLectureAccess = await checkTableExistOrNot('tbl_exceptionallectureaccess');
            if (checkExceptionalLectureAccess[0][0].count == 1) {
                let EndDate = await checkTableColumnExistOrNot('tbl_exceptionallectureaccess', 'EndDate');
                if (EndDate[0].length == 0) {
                    await sequelize.query(
                        `ALTER TABLE tbl_exceptionallectureaccess ADD EndDate DATETIME NULL DEFAULT NULL AFTER ScheduleDate;`
                    );
                    dump("table tbl_exceptionallectureaccess, column EndDate updated succesfully.")
                }

                dump("table tbl_coursetypes updated succesfully.")
            }

            // table tbl_groupmeeting columns
            let checkGroupMeeting = await checkTableExistOrNot('tbl_groupmeeting');
            if (checkGroupMeeting[0][0].count == 1) {
                let endDateTime = await checkTableColumnExistOrNot('tbl_groupmeeting', 'endDateTime');
                if (endDateTime[0].length == 0) {
                    await sequelize.query(
                        `ALTER TABLE tbl_groupmeeting ADD endDateTime DATETIME NULL DEFAULT NULL AFTER EndTime;`
                    );
                    dump("table tbl_groupmeeting, column endDateTime updated succesfully.")
                }

                dump("table tbl_coursetypes updated succesfully.")
            }

            // table tbl_homebanner columns
            let checkHomeBanner = await checkTableExistOrNot('tbl_homebanner');
            if (checkHomeBanner[0][0].count == 1) {
                let descriptionOne = await checkTableColumnExistOrNot('tbl_homebanner', 'descriptionOne');
                if (descriptionOne[0].length == 0) {
                    await sequelize.query(
                        `ALTER TABLE tbl_homebanner ADD descriptionOne VARCHAR(255) NULL DEFAULT NULL AFTER isdeleted;`
                    );
                    dump("table tbl_homebanner, column descriptionOne updated succesfully.")
                }

                let descriptionTwo = await checkTableColumnExistOrNot('tbl_homebanner', 'descriptionTwo');
                if (descriptionTwo[0].length == 0) {
                    await sequelize.query(
                        `ALTER TABLE tbl_homebanner ADD descriptionTwo VARCHAR(255) NULL DEFAULT NULL AFTER descriptionOne;`
                    );
                    dump("table tbl_homebanner, column descriptionTwo updated succesfully.")
                }

                let impressions = await checkTableColumnExistOrNot('tbl_homebanner', 'impressions');
                if (impressions[0].length == 0) {
                    await sequelize.query(
                        `ALTER TABLE tbl_homebanner ADD impressions INT(10) NOT NULL DEFAULT '0' AFTER descriptionTwo;`
                    );
                    dump("table tbl_homebanner, column impressions updated succesfully.")
                }

                let clicks = await checkTableColumnExistOrNot('tbl_homebanner', 'clicks');
                if (clicks[0].length == 0) {
                    await sequelize.query(
                        `ALTER TABLE tbl_homebanner ADD clicks INT(10) NOT NULL DEFAULT '0' AFTER impressions;`
                    );
                    dump("table tbl_homebanner, column clicks updated succesfully.")
                }

                let createdAt = await checkTableColumnExistOrNot('tbl_homebanner', 'createdAt');
                if (createdAt[0].length == 0) {
                    await sequelize.query(
                        `ALTER TABLE tbl_homebanner ADD createdAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP AFTER clicks;`
                    );
                    dump("table tbl_homebanner, column createdAt updated succesfully.")
                }

                dump("table tbl_coursetypes updated succesfully.")
            }

            // table tbl_mcqtestquestions columns
            let checkMcqTestQuestion = await checkTableExistOrNot('tbl_mcqtestquestions');
            if (checkMcqTestQuestion[0][0].count == 1) {
                let Option5 = await checkTableColumnExistOrNot('tbl_mcqtestquestions', 'Option5');
                if (Option5[0].length == 0) {
                    await sequelize.query(
                        `ALTER TABLE tbl_mcqtestquestions ADD Option5 VARCHAR(255) NULL DEFAULT NULL AFTER Option4;`
                    );
                    dump("table tbl_mcqtestquestions, column Option5 updated succesfully.")
                }
                let language = await checkTableColumnExistOrNot('tbl_mcqtestquestions', 'language');
                if (language[0].length == 0) {
                    await sequelize.query(
                        `ALTER TABLE tbl_mcqtestquestions ADD language VARCHAR(255) NULL DEFAULT NULL AFTER IsDeleted;`
                    );
                    dump("table tbl_mcqtestquestions, column language updated succesfully.")
                }
                let parentQuestionId = await checkTableColumnExistOrNot('tbl_mcqtestquestions', 'parentQuestionId');
                if (parentQuestionId[0].length == 0) {
                    await sequelize.query(
                        `ALTER TABLE tbl_mcqtestquestions ADD parentQuestionId VARCHAR(255) NULL DEFAULT NULL AFTER IsDeleted;`
                    );
                    dump("table tbl_mcqtestquestions, column parentQuestionId updated succesfully.")
                }

                dump("table tbl_mcqtestquestions updated succesfully.")
            }

            // table tbl_moderation columns
            let checkModeration = await checkTableExistOrNot('tbl_moderation');
            if (checkModeration[0][0].count == 1) {
                let price = await checkTableColumnExistOrNot('tbl_moderation', 'price');
                if (price[0].length == 0) {
                    await sequelize.query(
                        `ALTER TABLE tbl_moderation ADD price FLOAT(10,2) NULL DEFAULT NULL AFTER EGrade;`
                    );
                    dump("table tbl_moderation, column price updated succesfully.")
                }

                dump("table tbl_mcqtestquestions updated succesfully.")
            }

            // table tbl_notifications columns
            let checkNotification = await checkTableExistOrNot('tbl_notifications');
            if (checkNotification[0][0].count == 1) {
                // change column
                let nid = await checkTableColumnExistOrNot('tbl_notifications', 'nid');
                if (nid[0].length != 0) {
                    await sequelize.query(
                        `ALTER TABLE tbl_notifications CHANGE nid id BIGINT NOT NULL;`
                    );
                    dump("table tbl_notifications, column nid changed to id succesfully.")
                }

                let notificationtitle = await checkTableColumnExistOrNot('tbl_notifications', 'notificationtitle');
                if (notificationtitle[0].length != 0) {
                    await sequelize.query(
                        `ALTER TABLE tbl_notifications CHANGE notificationtitle title VARCHAR(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL;`
                    );
                    dump("table tbl_notifications, column notificationtitle changed to title succesfully.")
                }

                let notificationfile = await checkTableColumnExistOrNot('tbl_notifications', 'notificationfile');
                if (notificationfile[0].length != 0) {
                    await sequelize.query(
                        `ALTER TABLE tbl_notifications CHANGE notificationfile pdfUrl VARCHAR(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL;`
                    );
                    dump("table tbl_notifications, column notificationfile changed to pdfUrl succesfully.")
                }

                let sendto = await checkTableColumnExistOrNot('tbl_notifications', 'sendto');
                if (sendto[0].length != 0) {
                    await sequelize.query(
                        `ALTER TABLE tbl_notifications CHANGE sendto sendTo VARCHAR(500) DEFAULT NULL COMMENT '1=>all,2=>course category,3=>course purchase';`
                    );
                    dump("table tbl_notifications, column sendto changed to sendTo succesfully.")
                }

                let courseids = await checkTableColumnExistOrNot('tbl_notifications', 'courseids');
                if (courseids[0].length != 0) {
                    await sequelize.query(
                        `ALTER TABLE tbl_notifications CHANGE courseids courseIds LONGTEXT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL;`
                    );
                    dump("table tbl_notifications, column courseids changed to courseIds succesfully.")
                }

                // new column
                let type = await checkTableColumnExistOrNot('tbl_notifications', 'type');
                if (type[0].length == 0) {
                    await sequelize.query(
                        `ALTER TABLE tbl_notifications ADD type INT(10) NOT NULL COMMENT '1=>text,2=>video,3=>pdf,4=>youtube';`
                    );
                    dump("table tbl_notifications, column type updated succesfully.")
                }
                let isSent = await checkTableColumnExistOrNot('tbl_notifications', 'isSent');
                if (isSent[0].length == 0) {
                    await sequelize.query(
                        `ALTER TABLE tbl_notifications ADD isSent INT(10) NOT NULL AFTER type;`
                    );
                    dump("table tbl_notifications, column isSent updated succesfully.")
                }
                let categoryIds = await checkTableColumnExistOrNot('tbl_notifications', 'categoryIds');
                if (categoryIds[0].length == 0) {
                    await sequelize.query(
                        `ALTER TABLE tbl_notifications  ADD categoryIds LONGTEXT NOT NULL AFTER isSent;`
                    );
                    dump("table tbl_notifications, column categoryIds updated succesfully.")
                }
                let isAdmin = await checkTableColumnExistOrNot('tbl_notifications', 'isAdmin');
                if (isAdmin[0].length == 0) {
                    await sequelize.query(
                        `ALTER TABLE tbl_notifications ADD isAdmin TINYINT(1) NOT NULL AFTER categoryIds;`
                    );
                    dump("table tbl_notifications, column isAdmin updated succesfully.")
                }

                dump("table tbl_mcqtestquestions updated succesfully.")
            }

            // table tbl_practisetestuserresults columns
            let checkNotificationUser = await checkTableExistOrNot('tbl_practisetestuserresults');
            if (checkNotificationUser[0][0].count == 1) {
                let language = await checkTableColumnExistOrNot('tbl_practisetestuserresults', 'language');
                if (language[0].length == 0) {
                    await sequelize.query(
                        `ALTER TABLE tbl_practisetestuserresults ADD language VARCHAR(100) NOT NULL DEFAULT 'English' AFTER qoption;`
                    );
                    dump("table tbl_practisetestuserresults, column language updated succesfully.")
                }

                dump("table tbl_practisetestuserresults updated succesfully.")
            }

            // table tbl_sectiontests columns
            let checkSectionTest = await checkTableExistOrNot('tbl_sectiontests');
            if (checkSectionTest[0][0].count == 1) {
                let lastMapped = await checkTableColumnExistOrNot('tbl_sectiontests', 'lastMapped');
                if (lastMapped[0].length == 0) {
                    await sequelize.query(
                        `ALTER TABLE tbl_sectiontests ADD lastMapped TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP AFTER SyllabusPDF;`
                    );
                    dump("table tbl_sectiontests, column lastMapped updated succesfully.")
                }

                let courseverticleId = await checkTableColumnExistOrNot('tbl_sectiontests', 'courseverticleId');
                if (courseverticleId[0].length == 0) {
                    await sequelize.query(
                        `ALTER TABLE tbl_sectiontests ADD courseverticleId VARCHAR(255) NULL DEFAULT NULL AFTER lastMapped;`
                    );
                    dump("table tbl_sectiontests, column courseverticleId updated succesfully.")
                }

                let positiveMark = await checkTableColumnExistOrNot('tbl_sectiontests', 'positiveMark');
                if (positiveMark[0].length == 0) {
                    await sequelize.query(
                        `ALTER TABLE tbl_sectiontests ADD positiveMark INT(10) NOT NULL DEFAULT 0 AFTER courseverticleId;`
                    );
                    dump("table tbl_sectiontests, column positiveMark updated succesfully.")
                }

                let negativeMark = await checkTableColumnExistOrNot('tbl_sectiontests', 'negativeMark');
                if (negativeMark[0].length == 0) {
                    await sequelize.query(
                        `ALTER TABLE tbl_sectiontests ADD negativeMark INT(10) NOT NULL DEFAULT 0 AFTER positiveMark;`
                    );
                    dump("table tbl_sectiontests, column negativeMark updated succesfully.")
                }
                dump("table tbl_sectiontests updated succesfully.")
            }

            // table tbl_testdescussionvideosmapping columns
            let checkTestDescussionVideoMapping = await checkTableExistOrNot('tbl_testdescussionvideosmapping');
            if (checkTestDescussionVideoMapping[0][0].count == 1) {
                let language = await checkTableColumnExistOrNot('tbl_testdescussionvideosmapping', 'language');
                if (language[0].length == 0) {
                    await sequelize.query(
                        `ALTER TABLE tbl_testdescussionvideosmapping ADD language VARCHAR(255) NULL DEFAULT NULL AFTER addedOn;`
                    );
                    dump("table tbl_testdescussionvideosmapping, column language updated succesfully.")
                }

                dump("table tbl_testdescussionvideosmapping updated succesfully.")
            }

            // table tbl_testdiscussionvideos columns
            let checkTestDescussionVideo = await checkTableExistOrNot('tbl_testdiscussionvideos');
            if (checkTestDescussionVideo[0][0].count == 1) {
                let language = await checkTableColumnExistOrNot('tbl_testdiscussionvideos', 'language');
                if (language[0].length == 0) {
                    await sequelize.query(
                        `ALTER TABLE tbl_testdiscussionvideos ADD language VARCHAR(255) NULL DEFAULT NULL AFTER addedon, ADD titleSlug VARCHAR(255) NULL DEFAULT NULL AFTER language, ADD type TINYINT(1) NOT NULL COMMENT '1=>youtubevideo,2=>cypher ' AFTER titleSlug;`
                    );
                    dump("table tbl_testdiscussionvideos, column language updated succesfully.")
                }

                let titleSlug = await checkTableColumnExistOrNot('tbl_testdiscussionvideos', 'titleSlug');
                if (titleSlug[0].length == 0) {
                    await sequelize.query(
                        `ALTER TABLE tbl_testdiscussionvideos ADD titleSlug VARCHAR(255) NULL DEFAULT NULL AFTER language;`
                    );
                    dump("table tbl_testdiscussionvideos, column titleSlug updated succesfully.")
                }

                let type = await checkTableColumnExistOrNot('tbl_testdiscussionvideos', 'type');
                if (type[0].length == 0) {
                    await sequelize.query(
                        `ALTER TABLE tbl_testdiscussionvideos ADD type TINYINT(1) NOT NULL COMMENT '1=>youtubevideo,2=>cypher ' AFTER titleSlug;`
                    );
                    dump("table tbl_testdiscussionvideos, column type updated succesfully.")
                }

                dump("table tbl_testdiscussionvideos updated succesfully.")
            }

            // table tbl_testseriesfinalresult columns
            let checkTestSeriesFinalResult = await checkTableExistOrNot('tbl_testseriesfinalresult');
            if (checkTestSeriesFinalResult[0][0].count == 1) {
                let positiveMark = await checkTableColumnExistOrNot('tbl_testseriesfinalresult', 'positiveMark');
                if (positiveMark[0].length == 0) {
                    await sequelize.query(
                        `ALTER TABLE tbl_testseriesfinalresult ADD positiveMark INT(10) NOT NULL AFTER addedon;`
                    );
                    dump("table tbl_testseriesfinalresult, column positiveMark updated succesfully.")
                }

                let negativeMark = await checkTableColumnExistOrNot('tbl_testseriesfinalresult', 'negativeMark');
                if (negativeMark[0].length == 0) {
                    await sequelize.query(
                        `ALTER TABLE tbl_testseriesfinalresult ADD negativeMark INT(10) NOT NULL AFTER positiveMark;`
                    );
                    dump("table tbl_testseriesfinalresult, column negativeMark updated succesfully.")
                }

                let resultURL = await checkTableColumnExistOrNot('tbl_testseriesfinalresult', 'resultURL');
                if (resultURL[0].length == 0) {
                    await sequelize.query(
                        `ALTER TABLE tbl_testseriesfinalresult ADD resultURL VARCHAR(255) NULL DEFAULT NULL AFTER negativeMark;`
                    );
                    dump("table tbl_testseriesfinalresult, column resultURL updated succesfully.")
                }

                dump("table tbl_testseriesfinalresult updated succesfully.")
            }

            // table tbl_valueaddednotes columns
            let checkValueAddedNotes = await checkTableExistOrNot('tbl_valueaddednotes');
            if (checkValueAddedNotes[0][0].count == 1) {
                let language = await checkTableColumnExistOrNot('tbl_valueaddednotes', 'language');
                if (language[0].length == 0) {
                    await sequelize.query(
                        `ALTER TABLE tbl_valueaddednotes ADD language VARCHAR(255) NULL DEFAULT NULL AFTER addedon;`
                    );
                    dump("table tbl_valueaddednotes, column language updated succesfully.")
                }
                
                let titleSlug = await checkTableColumnExistOrNot('tbl_valueaddednotes', 'titleSlug');
                if (titleSlug[0].length == 0) {
                    await sequelize.query(
                        `ALTER TABLE tbl_valueaddednotes ADD titleSlug VARCHAR(255) NULL DEFAULT NULL AFTER language;`
                    );
                    dump("table tbl_valueaddednotes, column titleSlug updated succesfully.")
                }

                dump("table tbl_valueaddednotes updated succesfully.")
            }

            // table tbl_webusers columns
            let checkWebUser = await checkTableExistOrNot('tbl_webusers');
            if (checkWebUser[0][0].count == 1) {
                let password = await checkTableColumnExistOrNot('tbl_webusers', 'password');
                if (password[0].length == 0) {
                    await sequelize.query(
                        `ALTER TABLE tbl_webusers ADD password VARCHAR(255) NULL DEFAULT NULL AFTER IDProofBack;`
                    );
                    dump("table tbl_webusers, column password updated succesfully.")
                }

                let signupType = await checkTableColumnExistOrNot('tbl_webusers', 'signupType');
                if (signupType[0].length == 0) {
                    await sequelize.query(
                        `ALTER TABLE tbl_webusers ADD signupType ENUM('normal','social') NOT NULL AFTER password;`
                    );
                    dump("table tbl_webusers, column signupType updated succesfully.")
                }

                let socialId = await checkTableColumnExistOrNot('tbl_webusers', 'socialId');
                if (socialId[0].length == 0) {
                    await sequelize.query(
                        `ALTER TABLE tbl_webusers ADD socialId VARCHAR(255) NULL DEFAULT NULL AFTER signupType;`
                    );
                    dump("table tbl_webusers, column socialId updated succesfully.")
                }

                let emailOTP = await checkTableColumnExistOrNot('tbl_webusers', 'emailOTP');
                if (emailOTP[0].length == 0) {
                    await sequelize.query(
                        `ALTER TABLE tbl_webusers ADD emailOTP INT(10) NULL DEFAULT NULL AFTER socialId;`
                    );
                    dump("table tbl_webusers, column emailOTP updated succesfully.")
                }

                let mobileOTP = await checkTableColumnExistOrNot('tbl_webusers', 'mobileOTP');
                if (mobileOTP[0].length == 0) {
                    await sequelize.query(
                        `ALTER TABLE tbl_webusers ADD mobileOTP INT(10) NULL DEFAULT NULL AFTER emailOTP`
                    );
                    dump("table tbl_webusers, column mobileOTP updated succesfully.")
                }

                let emailVerified = await checkTableColumnExistOrNot('tbl_webusers', 'emailVerified');
                if (emailVerified[0].length == 0) {
                    await sequelize.query(
                        `ALTER TABLE tbl_webusers ADD emailVerified TINYINT(1) NOT NULL DEFAULT '0' AFTER mobileOTP`
                    );
                    dump("table tbl_webusers, column language updated succesfully.")
                }

                let mobileVerified = await checkTableColumnExistOrNot('tbl_webusers', 'mobileVerified');
                if (mobileVerified[0].length == 0) {
                    await sequelize.query(
                        `ALTER TABLE tbl_webusers ADD mobileVerified TINYINT(1) NOT NULL DEFAULT '0' AFTER emailVerified;`
                    );
                    dump("table tbl_webusers, column mobileVerified updated succesfully.")
                }

                let examId = await checkTableColumnExistOrNot('tbl_webusers', 'examId');
                if (examId[0].length == 0) {
                    await sequelize.query(
                        `ALTER TABLE tbl_webusers ADD examId INT(10) NOT NULL AFTER mobileVerified;`
                    );
                    dump("table tbl_webusers, column examId updated succesfully.")
                }

                let resetPasswordLinkExpiry = await checkTableColumnExistOrNot('tbl_webusers', 'resetPasswordLinkExpiry');
                if (resetPasswordLinkExpiry[0].length == 0) {
                    await sequelize.query(
                        `ALTER TABLE tbl_webusers ADD resetPasswordLinkExpiry TIMESTAMP NULL DEFAULT NULL AFTER examId`
                    );
                    dump("table tbl_webusers, column resetPasswordLinkExpiry updated succesfully.")
                }

                let ProfileImage = await checkTableColumnExistOrNot('tbl_webusers', 'ProfileImage');
                if (ProfileImage[0].length == 0) {
                    await sequelize.query(
                        `ALTER TABLE tbl_webusers ADD ProfileImage VARCHAR(255) NULL DEFAULT NULL AFTER resetPasswordLinkExpiry;`
                    );
                    dump("table tbl_webusers, column ProfileImage updated succesfully.")
                }

                let addressProof = await checkTableColumnExistOrNot('tbl_webusers', 'addressProof');
                if (addressProof[0].length == 0) {
                    await sequelize.query(
                        `ALTER TABLE tbl_webusers ADD addressProof VARCHAR(255) NULL DEFAULT NULL AFTER ProfileImage;`
                    );
                    dump("table tbl_webusers, column addressProof updated succesfully.")
                }

                let Gender = await checkTableColumnExistOrNot('tbl_webusers', 'Gender');
                if (Gender[0].length == 0) {
                    await sequelize.query(
                        `ALTER TABLE tbl_webusers ADD Gender ENUM('male','female') NOT NULL AFTER addressProof`
                    );
                    dump("table tbl_webusers, column Gender updated succesfully.")
                }

                let fcmUid = await checkTableColumnExistOrNot('tbl_webusers', 'fcmUid');
                if (fcmUid[0].length == 0) {
                    await sequelize.query(
                        `ALTER TABLE tbl_webusers ADD fcmUid VARCHAR(255) NULL DEFAULT NULL AFTER Gender;                        `
                    );
                    dump("table tbl_webusers, column fcmUid updated succesfully.")
                }

                dump("table tbl_webusers updated succesfully.")
            }

            return successRes(res, 'Success', {});
        } catch (error) {
            dump({ error })
            return failedRes(res, error.message);
        }
    }
}