-- CreateTable
CREATE TABLE `questions` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `question` TEXT NOT NULL,
    `category` VARCHAR(100) NOT NULL,
    `explanation` TEXT NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE InnoDb;

-- CreateTable
CREATE TABLE `answer` (
    `answer_a` TEXT NOT NULL,
    `answer_b` TEXT NOT NULL,
    `answer_c` TEXT NOT NULL,
    `answer_d` TEXT NOT NULL,
    `answer_a_correct` BOOLEAN NOT NULL,
    `answer_b_correct` BOOLEAN NOT NULL,
    `answer_c_correct` BOOLEAN NOT NULL,
    `answer_d_correct` BOOLEAN NOT NULL,
    `questionId` INTEGER NOT NULL,

    UNIQUE INDEX `answer_questionId_key`(`questionId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE InnoDb;

-- AddForeignKey
ALTER TABLE `answer` ADD CONSTRAINT `answer_questionId_fkey` FOREIGN KEY (`questionId`) REFERENCES `questions`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
