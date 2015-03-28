CREATE DATABASE chat;

USE chat;

-- ---
-- Globals
-- ---

-- SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
-- SET FOREIGN_KEY_CHECKS=0;

-- ---
-- Table 'users'
-- 
-- ---

DROP TABLE IF EXISTS `users`;
    
CREATE TABLE `users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `userName` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'messages'
-- 
-- ---

DROP TABLE IF EXISTS `messages`;
    
CREATE TABLE `messages` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `author` INT NOT NULL,
  `room` INT NOT NULL,
  `text` VARCHAR(120) NOT NULL,
  `created_at` DATETIME NOT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'rooms'
-- 
-- ---

DROP TABLE IF EXISTS `rooms`;
    
CREATE TABLE `rooms` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `roomName` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`id`)
);
-- ---
-- Foreign Keys 
-- ---
ALTER TABLE `messages` ADD FOREIGN KEY (author) REFERENCES users(`id`);
ALTER TABLE `messages` ADD FOREIGN KEY (room) REFERENCES rooms(`id`);

-- ---
-- Table Properties
-- ---

-- ALTER TABLE `users` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `messages` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `rooms` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data
-- ---

INSERT INTO `users` (`id`,`userName`) VALUES
('1','trace');
-- INSERT INTO `messages` (`id`,`author`,`room`,`text`,`created_at`) VALUES
-- ('1','2','room','hi');
-- INSERT INTO `rooms` (`id`,`roomName`) VALUES
-- ('1','test');



