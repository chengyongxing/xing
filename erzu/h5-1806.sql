/*
Navicat MySQL Data Transfer

Source Server         : 1806
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : ku

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2018-09-21 10:39:37
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for gouwuche
-- ----------------------------
DROP TABLE IF EXISTS `gouwuche`;
CREATE TABLE `gouwuche` (
  `cookie` text
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of gouwuche
-- ----------------------------
INSERT INTO `gouwuche` VALUES ('[{\"guid\":\"002\",\"imgurl\":\"http://localhost:1806/images/main2.png\",\"name\":\"爆炸7\",\"price\":3899,\"sale\":1670,\"qty\":1},{\"guid\":\"001\",\"imgurl\":\"http://localhost:1806/images/main1.png\",\"name\":\"杀敌7\",\"price\":5899,\"sale\":5888,\"qty\":1},{\"guid\":\"003\",\"imgurl\":\"http://localhost:1806/images/main3.png\",\"name\":\"牛x7\",\"price\":1999,\"sale\":1599,\"qty\":1},{\"guid\":\"004\",\"imgurl\":\"http://localhost:1806/images/main4.png\",\"name\":\"牛x7\",\"price\":1999,\"sale\":1899,\"qty\":1}]');

-- ----------------------------
-- Table structure for shangpin
-- ----------------------------
DROP TABLE IF EXISTS `shangpin`;
CREATE TABLE `shangpin` (
  `id` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `nickname` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `imgurl` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `imgurl1` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `imgurl2` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `imgurl3` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `price` float(40,2) NOT NULL,
  `sale` float(40,2) NOT NULL,
  `time` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of shangpin
-- ----------------------------
INSERT INTO `shangpin` VALUES ('001', 'iphone7 plugs', '杀敌7', '../images/main1.png', '../images/jp4.png', '../images/jp2.png', '../images/jp3.png', '5899.00', '5888.00', '2012/10/1 22:10:00');
INSERT INTO `shangpin` VALUES ('002', 'Note7', '爆炸7', '../images/main2.png', '../images/jp4.png', '../images/jp2.png', '../images/jp3.png', '3899.00', '1670.00', '2013/10/1 22:10:00');
INSERT INTO `shangpin` VALUES ('003', '荣耀7', '牛x7', '../images/main3.png', '../images/jp4.png', '../images/jp2.png', '../images/jp3.png', '1999.00', '1599.00', '2015/10/1 22:10:00');
INSERT INTO `shangpin` VALUES ('004', '荣耀7', '牛x7', '../images/main4.png', '../images/jp4.png', '../images/jp2.png', '../images/jp3.png', '1999.00', '1899.00', '2016/10/1 22:10:00');
INSERT INTO `shangpin` VALUES ('005', '荣耀7', '牛x7', '../images/main5.png', '../images/jp4.png', '../images/jp2.png', '../images/jp3.png', '1999.00', '1399.00', '2018/10/1 22:10:00');
INSERT INTO `shangpin` VALUES ('006', '红米', '牛x7', '../images/main6.png', '../images/jp4.png', '../images/jp2.png', '../images/jp3.png', '1999.00', '899.00', '2018/1/1 22:10:00');
INSERT INTO `shangpin` VALUES ('007', '红米', '牛x7', '../images/main6.png', '../images/jp4.png', '../images/jp2.png', '../images/jp3.png', '1999.00', '899.00', '2018/1/1 22:10:00');
INSERT INTO `shangpin` VALUES ('008', '红米', '牛x7', '../images/main6.png', '../images/jp4.png', '../images/jp2.png', '../images/jp3.png', '1999.00', '899.00', '2018/1/1 22:10:00');
INSERT INTO `shangpin` VALUES ('009', '红米', '牛x7', '../images/main6.png', '../images/jp4.png', '../images/jp2.png', '../images/jp3.png', '1999.00', '899.00', '2018/1/1 22:10:00');
INSERT INTO `shangpin` VALUES ('010', '红米', '牛x7', '../images/main6.png', '../images/jp4.png', '../images/jp2.png', '../images/jp3.png', '1999.00', '899.00', '2018/1/1 22:10:00');
INSERT INTO `shangpin` VALUES ('011', 'iphone7 plugs', '杀敌7', '../images/main1.png', '../images/jp4.png', '../images/jp2.png', '../images/jp3.png', '5899.00', '5888.00', '2012/10/1 22:10:00');
INSERT INTO `shangpin` VALUES ('012', 'Note7', '爆炸7', '../images/main2.png', '../images/jp4.png', '../images/jp2.png', '../images/jp3.png', '3899.00', '1670.00', '2013/10/1 22:10:00');
INSERT INTO `shangpin` VALUES ('013', '荣耀7', '牛x7', '../images/main3.png', '../images/jp4.png', '../images/jp2.png', '../images/jp3.png', '1999.00', '1599.00', '2015/10/1 22:10:00');
INSERT INTO `shangpin` VALUES ('014', '荣耀7', '牛x7', '../images/main4.png', '../images/jp4.png', '../images/jp2.png', '../images/jp3.png', '1999.00', '1899.00', '2016/10/1 22:10:00');
INSERT INTO `shangpin` VALUES ('015', '荣耀7', '牛x7', '../images/main5.png', '../images/jp4.png', '../images/jp2.png', '../images/jp3.png', '1999.00', '1399.00', '2018/10/1 22:10:00');
INSERT INTO `shangpin` VALUES ('016', '红米', '牛x7', '../images/main6.png', '../images/jp4.png', '../images/jp2.png', '../images/jp3.png', '1999.00', '899.00', '2018/1/1 22:10:00');
INSERT INTO `shangpin` VALUES ('017', '红米', '牛x7', '../images/main6.png', '../images/jp4.png', '../images/jp2.png', '../images/jp3.png', '1999.00', '899.00', '2018/1/1 22:10:00');
INSERT INTO `shangpin` VALUES ('018', '红米', '牛x7', '../images/main6.png', '../images/jp4.png', '../images/jp2.png', '../images/jp3.png', '1999.00', '899.00', '2018/1/1 22:10:00');
INSERT INTO `shangpin` VALUES ('019', '红米', '牛x7', '../images/main6.png', '../images/jp4.png', '../images/jp2.png', '../images/jp3.png', '1999.00', '899.00', '2018/1/1 22:10:00');
INSERT INTO `shangpin` VALUES ('020', '红米', '牛x7', '../images/main6.png', '../images/jp4.png', '../images/jp2.png', '../images/jp3.png', '1999.00', '899.00', '2018/1/1 22:10:00');
INSERT INTO `shangpin` VALUES ('021', '红米', '牛x7', '../images/main6.png', '../images/jp4.png', '../images/jp2.png', '../images/jp3.png', '1999.00', '899.00', '2018/1/1 22:10:00');
INSERT INTO `shangpin` VALUES ('022', '红米', '牛x7', '../images/main6.png', '../images/jp4.png', '../images/jp2.png', '../images/jp3.png', '1999.00', '899.00', '2018/1/1 22:10:00');
INSERT INTO `shangpin` VALUES ('023', '红米', '牛x7', '../images/main6.png', '../images/jp4.png', '../images/jp2.png', '../images/jp3.png', '1999.00', '899.00', '2018/1/1 22:10:00');
INSERT INTO `shangpin` VALUES ('024', '红米', '牛x7', '../images/main6.png', '../images/jp4.png', '../images/jp2.png', '../images/jp3.png', '1999.00', '899.00', '2018/1/1 22:10:00');
INSERT INTO `shangpin` VALUES ('025', '红米', '牛x7', '../images/main6.png', '../images/jp4.png', '../images/jp2.png', '../images/jp3.png', '1999.00', '899.00', '2018/1/1 22:10:00');
INSERT INTO `shangpin` VALUES ('026', '红米', '牛x7', '../images/main6.png', '../images/jp4.png', '../images/jp2.png', '../images/jp3.png', '1999.00', '899.00', '2018/1/1 22:10:00');
INSERT INTO `shangpin` VALUES ('027', '红米', '牛x7', '../images/main6.png', '../images/jp4.png', '../images/jp2.png', '../images/jp3.png', '1999.00', '899.00', '2018/1/1 22:10:00');

-- ----------------------------
-- Table structure for zucebiao
-- ----------------------------
DROP TABLE IF EXISTS `zucebiao`;
CREATE TABLE `zucebiao` (
  `uname` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`uname`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of zucebiao
-- ----------------------------
INSERT INTO `zucebiao` VALUES ('lemon', '123456');
INSERT INTO `zucebiao` VALUES ('laoxie', '123456');
INSERT INTO `zucebiao` VALUES ('fksah', '123456');
INSERT INTO `zucebiao` VALUES ('esgsdfs', '1324325');
INSERT INTO `zucebiao` VALUES ('adsadads', '111111');
SET FOREIGN_KEY_CHECKS=1;
