-- CreateTable
CREATE TABLE `course` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `c_id` TEXT NOT NULL,
    `name` TEXT NOT NULL,
    `redit` INTEGER NOT NULL,
    `hours` INTEGER NOT NULL,
    `teacherId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `teacher` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `t_id` VARCHAR(191) NOT NULL,
    `name` TEXT NOT NULL,
    `gender` TEXT NOT NULL,
    `title` TEXT NOT NULL,

    UNIQUE INDEX `teacher_t_id_key`(`t_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `student` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `s_id` TEXT NOT NULL,
    `name` TEXT NOT NULL,
    `gender` TEXT NOT NULL,
    `classesId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `classes` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `cl_id` VARCHAR(191) NOT NULL,
    `name` TEXT NOT NULL,
    `remark` TEXT NOT NULL,

    UNIQUE INDEX `classes_cl_id_key`(`cl_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `relations` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `c_id` TEXT NOT NULL,
    `cl_id` TEXT NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `course` ADD CONSTRAINT `course_teacherId_fkey` FOREIGN KEY (`teacherId`) REFERENCES `teacher`(`t_id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `student` ADD CONSTRAINT `student_classesId_fkey` FOREIGN KEY (`classesId`) REFERENCES `classes`(`cl_id`) ON DELETE CASCADE ON UPDATE CASCADE;
