/*
Navicat MySQL Data Transfer

Source Server         : xing
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : h5-1808

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2018-10-25 10:53:06
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for car
-- ----------------------------
DROP TABLE IF EXISTS `car`;
CREATE TABLE `car` (
  `admin` varchar(255) NOT NULL,
  `id` int(3) NOT NULL AUTO_INCREMENT,
  `img` varchar(255) DEFAULT NULL,
  `wenzi` varchar(255) DEFAULT NULL,
  `subtit` varchar(255) DEFAULT NULL,
  `price` int(11) DEFAULT NULL,
  `linePrice` int(11) DEFAULT NULL,
  `purchased` varchar(255) DEFAULT NULL,
  `timer` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `qty` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=91 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of car
-- ----------------------------
INSERT INTO `car` VALUES ('13413684985', '14', '../images/xx5.jpg', '韩后肌致赋颜精油霜8件组2', '', '212', '412', '4235', '2018-10-25 10:11:46', '6');
INSERT INTO `car` VALUES ('13413684985', '13', '../images/xx4.jpg', '富昌 养生滋补皂角米168+桃胶168+雪燕35组合装', '', '211', '411', '4234', '2018-10-25 10:52:30', '6');
INSERT INTO `car` VALUES ('13413684985', '8', '../images/xx8.jpg', '玉真了和白玉仿古绞丝纹平安扣项链1', '', '206', '406', '4229', '2018-10-25 10:52:29', '5');
INSERT INTO `car` VALUES ('13435927445', '22', '../images/xx4.jpg', '富昌 养生滋补皂角米168+桃胶168+雪燕35组合装1', '', '220', '420', '4243', '2018-10-24 20:42:15', '2');
INSERT INTO `car` VALUES ('13435927445', '21', '../images/xx3.jpg', '新西兰goodhealth牛初乳2罐装·乳白色3', '', '219', '419', '4242', '2018-10-24 20:42:30', '2');
INSERT INTO `car` VALUES ('13435927445', '80', '../images/xx8.jpg', '玉真了和白玉仿古绞丝纹平安扣项链9', '', '278', '478', '4301', '2018-10-24 20:42:55', '9');
INSERT INTO `car` VALUES ('13413684985', '23', '../images/xx5.jpg', '韩后肌致赋颜精油霜8件组3', '', '221', '421', '4244', '2018-10-25 10:11:52', '1');

-- ----------------------------
-- Table structure for list
-- ----------------------------
DROP TABLE IF EXISTS `list`;
CREATE TABLE `list` (
  `id` int(3) NOT NULL AUTO_INCREMENT,
  `img` varchar(255) DEFAULT NULL,
  `wenzi` varchar(255) DEFAULT NULL,
  `subtit` varchar(255) DEFAULT NULL,
  `price` int(11) DEFAULT NULL,
  `linePrice` int(11) DEFAULT NULL,
  `purchased` varchar(255) DEFAULT NULL,
  `timer` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=91 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of list
-- ----------------------------
INSERT INTO `list` VALUES ('1', '../images/xx1.jpg', '全棉磨毛 舒适睡眠1', '瑞典DAY&ME 生态加厚保暖冬季全棉磨毛四件套特惠款·艾瑞斯23', '199', '399', '4222', '2017-10-10 00:00:00');
INSERT INTO `list` VALUES ('2', '../images/xx2.jpg', '美国希尔普（HILL TOP ）厨房调理盆滤篮5件畅销组（特厚）1', '', '200', '400', '4223', '2018-10-10 00:00:00');
INSERT INTO `list` VALUES ('3', '../images/xx3.jpg', '新西兰goodhealth牛初乳2罐装·乳白色1', '', '201', '401', '4224', '2018-10-02 00:00:00');
INSERT INTO `list` VALUES ('4', '../images/xx4.jpg', '富昌 养生滋补皂角米168+桃胶168+雪燕35组合装', '', '202', '402', '4225', '2018-09-27 00:00:00');
INSERT INTO `list` VALUES ('5', '../images/xx5.jpg', '韩后肌致赋颜精油霜8件组1', '', '203', '403', '4226', '2018-09-26 00:00:00');
INSERT INTO `list` VALUES ('6', '../images/xx6.jpg', ' SKG 8088S 养生壶全自动加厚玻璃家用多功能电热煮茶器黑花茶炖盅·8088S1', '', '204', '404', '4227', '2018-09-25 00:00:00');
INSERT INTO `list` VALUES ('7', '../images/xx7.jpg', '莺卡 羊毛尼松紧中腰哈伦裤·黑色', '', '205', '405', '4228', '2018-10-01 00:00:00');
INSERT INTO `list` VALUES ('8', '../images/xx8.jpg', '玉真了和白玉仿古绞丝纹平安扣项链1', '', '206', '406', '4229', '2018-10-01 00:00:00');
INSERT INTO `list` VALUES ('9', '../images/xx9.jpg', '玉真了和白玉仿古绞丝纹平安扣项链11', '', '207', '407', '4230', '2018-10-01 00:00:00');
INSERT INTO `list` VALUES ('10', '../images/xx1.jpg', '全棉磨毛 舒适睡眠2', '瑞典DAY&ME 生态加厚保暖冬季全棉磨毛四件套特惠款·艾瑞斯24', '208', '408', '4231', '2018-10-01 00:00:00');
INSERT INTO `list` VALUES ('11', '../images/xx2.jpg', '美国希尔普（HILL TOP ）厨房调理盆滤篮5件畅销组（特厚）2', '', '209', '409', '4232', '2018-10-01 00:00:00');
INSERT INTO `list` VALUES ('12', '../images/xx3.jpg', '新西兰goodhealth牛初乳2罐装·乳白色2', '', '210', '410', '4233', '2018-10-01 00:00:00');
INSERT INTO `list` VALUES ('13', '../images/xx4.jpg', '富昌 养生滋补皂角米168+桃胶168+雪燕35组合装', '', '211', '411', '4234', '2018-09-25 00:00:00');
INSERT INTO `list` VALUES ('14', '../images/xx5.jpg', '韩后肌致赋颜精油霜8件组2', '', '212', '412', '4235', '2018-09-25 00:00:00');
INSERT INTO `list` VALUES ('15', '../images/xx6.jpg', ' SKG 8088S 养生壶全自动加厚玻璃家用多功能电热煮茶器黑花茶炖盅·8088S2', '', '213', '413', '4236', '2018-09-25 00:00:00');
INSERT INTO `list` VALUES ('16', '../images/xx7.jpg', '莺卡 羊毛尼松紧中腰哈伦裤·黑色', '', '214', '414', '4237', '2018-10-10 00:00:00');
INSERT INTO `list` VALUES ('17', '../images/xx8.jpg', '玉真了和白玉仿古绞丝纹平安扣项链2', '', '215', '415', '4238', '2018-10-10 00:00:00');
INSERT INTO `list` VALUES ('18', '../images/xx9.jpg', '玉真了和白玉仿古绞丝纹平安扣项链12', '', '216', '416', '4239', '2018-10-10 00:00:00');
INSERT INTO `list` VALUES ('19', '../images/xx1.jpg', '全棉磨毛 舒适睡眠3', '瑞典DAY&ME 生态加厚保暖冬季全棉磨毛四件套特惠款·艾瑞斯25', '217', '417', '4240', '2018-10-10 00:00:00');
INSERT INTO `list` VALUES ('20', '../images/xx2.jpg', '美国希尔普（HILL TOP ）厨房调理盆滤篮5件畅销组（特厚）3', '', '218', '418', '4241', '2018-10-10 00:00:00');
INSERT INTO `list` VALUES ('21', '../images/xx3.jpg', '新西兰goodhealth牛初乳2罐装·乳白色3', '', '219', '419', '4242', '2018-10-10 00:00:00');
INSERT INTO `list` VALUES ('22', '../images/xx4.jpg', '富昌 养生滋补皂角米168+桃胶168+雪燕35组合装1', '', '220', '420', '4243', '2018-10-10 00:00:00');
INSERT INTO `list` VALUES ('23', '../images/xx5.jpg', '韩后肌致赋颜精油霜8件组3', '', '221', '421', '4244', '2018-10-10 00:00:00');
INSERT INTO `list` VALUES ('24', '../images/xx6.jpg', ' SKG 8088S 养生壶全自动加厚玻璃家用多功能电热煮茶器黑花茶炖盅·8088S3', '', '222', '422', '4245', '2018-10-10 00:00:00');
INSERT INTO `list` VALUES ('25', '../images/xx7.jpg', '莺卡 羊毛尼松紧中腰哈伦裤·黑色1', '', '223', '423', '4246', '2018-10-10 00:00:00');
INSERT INTO `list` VALUES ('26', '../images/xx8.jpg', '玉真了和白玉仿古绞丝纹平安扣项链3', '', '224', '424', '4247', '2018-10-10 00:00:00');
INSERT INTO `list` VALUES ('27', '../images/xx9.jpg', '玉真了和白玉仿古绞丝纹平安扣项链13', '', '225', '425', '4248', '2018-10-10 00:00:00');
INSERT INTO `list` VALUES ('28', '../images/xx1.jpg', '全棉磨毛 舒适睡眠4', '瑞典DAY&ME 生态加厚保暖冬季全棉磨毛四件套特惠款·艾瑞斯26', '226', '426', '4249', '2017-10-10 00:00:00');
INSERT INTO `list` VALUES ('29', '../images/xx2.jpg', '美国希尔普（HILL TOP ）厨房调理盆滤篮5件畅销组（特厚）4', '', '227', '427', '4250', '2018-10-10 00:00:00');
INSERT INTO `list` VALUES ('30', '../images/xx3.jpg', '新西兰goodhealth牛初乳2罐装·乳白色4', '', '228', '428', '4251', '2018-10-02 00:00:00');
INSERT INTO `list` VALUES ('31', '../images/xx4.jpg', '富昌 养生滋补皂角米168+桃胶168+雪燕35组合装2', '', '229', '429', '4252', '2018-09-27 00:00:00');
INSERT INTO `list` VALUES ('32', '../images/xx5.jpg', '韩后肌致赋颜精油霜8件组4', '', '230', '430', '4253', '2018-09-26 00:00:00');
INSERT INTO `list` VALUES ('33', '../images/xx6.jpg', ' SKG 8088S 养生壶全自动加厚玻璃家用多功能电热煮茶器黑花茶炖盅·8088S4', '', '231', '431', '4254', '2018-09-25 00:00:00');
INSERT INTO `list` VALUES ('34', '../images/xx7.jpg', '莺卡 羊毛尼松紧中腰哈伦裤·黑色2', '', '232', '432', '4255', '2018-10-01 00:00:00');
INSERT INTO `list` VALUES ('35', '../images/xx8.jpg', '玉真了和白玉仿古绞丝纹平安扣项链4', '', '233', '433', '4256', '2018-10-01 00:00:00');
INSERT INTO `list` VALUES ('36', '../images/xx9.jpg', '玉真了和白玉仿古绞丝纹平安扣项链14', '', '234', '434', '4257', '2018-10-01 00:00:00');
INSERT INTO `list` VALUES ('37', '../images/xx1.jpg', '全棉磨毛 舒适睡眠5', '瑞典DAY&ME 生态加厚保暖冬季全棉磨毛四件套特惠款·艾瑞斯27', '235', '435', '4258', '2018-10-01 00:00:00');
INSERT INTO `list` VALUES ('38', '../images/xx2.jpg', '美国希尔普（HILL TOP ）厨房调理盆滤篮5件畅销组（特厚）5', '', '236', '436', '4259', '2018-10-01 00:00:00');
INSERT INTO `list` VALUES ('39', '../images/xx3.jpg', '新西兰goodhealth牛初乳2罐装·乳白色5', '', '237', '437', '4260', '2018-10-01 00:00:00');
INSERT INTO `list` VALUES ('40', '../images/xx4.jpg', '富昌 养生滋补皂角米168+桃胶168+雪燕35组合装3', '', '238', '438', '4261', '2018-09-25 00:00:00');
INSERT INTO `list` VALUES ('41', '../images/xx5.jpg', '韩后肌致赋颜精油霜8件组5', '', '239', '439', '4262', '2018-09-25 00:00:00');
INSERT INTO `list` VALUES ('42', '../images/xx6.jpg', ' SKG 8088S 养生壶全自动加厚玻璃家用多功能电热煮茶器黑花茶炖盅·8088S5', '', '240', '440', '4263', '2018-09-25 00:00:00');
INSERT INTO `list` VALUES ('43', '../images/xx7.jpg', '莺卡 羊毛尼松紧中腰哈伦裤·黑色3', '', '241', '441', '4264', '2018-10-10 00:00:00');
INSERT INTO `list` VALUES ('44', '../images/xx8.jpg', '玉真了和白玉仿古绞丝纹平安扣项链5', '', '242', '442', '4265', '2018-10-10 00:00:00');
INSERT INTO `list` VALUES ('45', '../images/xx9.jpg', '玉真了和白玉仿古绞丝纹平安扣项链15', '', '243', '443', '4266', '2018-10-10 00:00:00');
INSERT INTO `list` VALUES ('46', '../images/xx1.jpg', '全棉磨毛 舒适睡眠6', '瑞典DAY&ME 生态加厚保暖冬季全棉磨毛四件套特惠款·艾瑞斯28', '244', '444', '4267', '2018-10-10 00:00:00');
INSERT INTO `list` VALUES ('47', '../images/xx2.jpg', '美国希尔普（HILL TOP ）厨房调理盆滤篮5件畅销组（特厚）6', '', '245', '445', '4268', '2017-10-10 00:00:00');
INSERT INTO `list` VALUES ('48', '../images/xx3.jpg', '新西兰goodhealth牛初乳2罐装·乳白色6', '', '246', '446', '4269', '2018-10-10 00:00:00');
INSERT INTO `list` VALUES ('49', '../images/xx4.jpg', '富昌 养生滋补皂角米168+桃胶168+雪燕35组合装4', '', '247', '447', '4270', '2018-10-02 00:00:00');
INSERT INTO `list` VALUES ('50', '../images/xx5.jpg', '韩后肌致赋颜精油霜8件组6', '', '248', '448', '4271', '2018-09-27 00:00:00');
INSERT INTO `list` VALUES ('51', '../images/xx6.jpg', ' SKG 8088S 养生壶全自动加厚玻璃家用多功能电热煮茶器黑花茶炖盅·8088S6', '', '249', '449', '4272', '2018-09-26 00:00:00');
INSERT INTO `list` VALUES ('52', '../images/xx7.jpg', '莺卡 羊毛尼松紧中腰哈伦裤·黑色4', '', '250', '450', '4273', '2018-09-25 00:00:00');
INSERT INTO `list` VALUES ('53', '../images/xx8.jpg', '玉真了和白玉仿古绞丝纹平安扣项链6', '', '251', '451', '4274', '2018-10-01 00:00:00');
INSERT INTO `list` VALUES ('54', '../images/xx9.jpg', '玉真了和白玉仿古绞丝纹平安扣项链16', '', '252', '452', '4275', '2018-10-01 00:00:00');
INSERT INTO `list` VALUES ('55', '../images/xx1.jpg', '全棉磨毛 舒适睡眠7', '瑞典DAY&ME 生态加厚保暖冬季全棉磨毛四件套特惠款·艾瑞斯29', '253', '453', '4276', '2018-10-01 00:00:00');
INSERT INTO `list` VALUES ('56', '../images/xx2.jpg', '美国希尔普（HILL TOP ）厨房调理盆滤篮5件畅销组（特厚）7', '', '254', '454', '4277', '2018-10-01 00:00:00');
INSERT INTO `list` VALUES ('57', '../images/xx3.jpg', '新西兰goodhealth牛初乳2罐装·乳白色7', '', '255', '455', '4278', '2018-10-01 00:00:00');
INSERT INTO `list` VALUES ('58', '../images/xx4.jpg', '富昌 养生滋补皂角米168+桃胶168+雪燕35组合装5', '', '256', '456', '4279', '2018-10-01 00:00:00');
INSERT INTO `list` VALUES ('59', '../images/xx5.jpg', '韩后肌致赋颜精油霜8件组7', '', '257', '457', '4280', '2018-09-25 00:00:00');
INSERT INTO `list` VALUES ('60', '../images/xx6.jpg', ' SKG 8088S 养生壶全自动加厚玻璃家用多功能电热煮茶器黑花茶炖盅·8088S7', '', '258', '458', '4281', '2018-09-25 00:00:00');
INSERT INTO `list` VALUES ('61', '../images/xx7.jpg', '莺卡 羊毛尼松紧中腰哈伦裤·黑色5', '', '259', '459', '4282', '2018-09-25 00:00:00');
INSERT INTO `list` VALUES ('62', '../images/xx8.jpg', '玉真了和白玉仿古绞丝纹平安扣项链7', '', '260', '460', '4283', '2018-10-10 00:00:00');
INSERT INTO `list` VALUES ('63', '../images/xx9.jpg', '玉真了和白玉仿古绞丝纹平安扣项链17', '', '261', '461', '4284', '2018-10-10 00:00:00');
INSERT INTO `list` VALUES ('64', '../images/xx1.jpg', '全棉磨毛 舒适睡眠8', '瑞典DAY&ME 生态加厚保暖冬季全棉磨毛四件套特惠款·艾瑞斯30', '262', '462', '4285', '2018-10-10 00:00:00');
INSERT INTO `list` VALUES ('65', '../images/xx2.jpg', '美国希尔普（HILL TOP ）厨房调理盆滤篮5件畅销组（特厚）8', '', '263', '463', '4286', '2018-10-10 00:00:00');
INSERT INTO `list` VALUES ('66', '../images/xx3.jpg', '新西兰goodhealth牛初乳2罐装·乳白色8', '', '264', '464', '4287', '2018-10-10 00:00:00');
INSERT INTO `list` VALUES ('67', '../images/xx4.jpg', '富昌 养生滋补皂角米168+桃胶168+雪燕35组合装6', '', '265', '465', '4288', '2018-10-10 00:00:00');
INSERT INTO `list` VALUES ('68', '../images/xx5.jpg', '韩后肌致赋颜精油霜8件组8', '', '266', '466', '4289', '2018-10-10 00:00:00');
INSERT INTO `list` VALUES ('69', '../images/xx6.jpg', ' SKG 8088S 养生壶全自动加厚玻璃家用多功能电热煮茶器黑花茶炖盅·8088S8', '', '267', '467', '4290', '2018-10-10 00:00:00');
INSERT INTO `list` VALUES ('70', '../images/xx7.jpg', '莺卡 羊毛尼松紧中腰哈伦裤·黑色6', '', '268', '468', '4291', '2017-10-10 00:00:00');
INSERT INTO `list` VALUES ('71', '../images/xx8.jpg', '玉真了和白玉仿古绞丝纹平安扣项链8', '', '269', '469', '4292', '2018-10-10 00:00:00');
INSERT INTO `list` VALUES ('72', '../images/xx9.jpg', '玉真了和白玉仿古绞丝纹平安扣项链18', '', '270', '470', '4293', '2018-10-02 00:00:00');
INSERT INTO `list` VALUES ('73', '../images/xx1.jpg', '全棉磨毛 舒适睡眠9', '瑞典DAY&ME 生态加厚保暖冬季全棉磨毛四件套特惠款·艾瑞斯31', '271', '471', '4294', '2018-09-27 00:00:00');
INSERT INTO `list` VALUES ('74', '../images/xx2.jpg', '美国希尔普（HILL TOP ）厨房调理盆滤篮5件畅销组（特厚）9', '', '272', '472', '4295', '2018-09-26 00:00:00');
INSERT INTO `list` VALUES ('75', '../images/xx3.jpg', '新西兰goodhealth牛初乳2罐装·乳白色9', '', '273', '473', '4296', '2018-09-25 00:00:00');
INSERT INTO `list` VALUES ('76', '../images/xx4.jpg', '富昌 养生滋补皂角米168+桃胶168+雪燕35组合装7', '', '274', '474', '4297', '2018-10-01 00:00:00');
INSERT INTO `list` VALUES ('77', '../images/xx5.jpg', '韩后肌致赋颜精油霜8件组9', '', '275', '475', '4298', '2018-10-01 00:00:00');
INSERT INTO `list` VALUES ('78', '../images/xx6.jpg', ' SKG 8088S 养生壶全自动加厚玻璃家用多功能电热煮茶器黑花茶炖盅·8088S9', '', '276', '476', '4299', '2018-10-01 00:00:00');
INSERT INTO `list` VALUES ('79', '../images/xx7.jpg', '莺卡 羊毛尼松紧中腰哈伦裤·黑色7', '', '277', '477', '4300', '2018-10-01 00:00:00');
INSERT INTO `list` VALUES ('80', '../images/xx8.jpg', '玉真了和白玉仿古绞丝纹平安扣项链9', '', '278', '478', '4301', '2018-10-01 00:00:00');
INSERT INTO `list` VALUES ('81', '../images/xx9.jpg', '玉真了和白玉仿古绞丝纹平安扣项链19', '', '279', '479', '4302', '2018-11-01 19:27:36');
INSERT INTO `list` VALUES ('82', '../images/xx1.jpg', '全棉磨毛 舒适睡眠10', '瑞典DAY&ME 生态加厚保暖冬季全棉磨毛四件套特惠款·艾瑞斯32', '280', '480', '4303', '2018-11-22 19:27:41');
INSERT INTO `list` VALUES ('83', '../images/xx2.jpg', '美国希尔普（HILL TOP ）厨房调理盆滤篮5件畅销组（特厚）10', '', '281', '481', '4304', '2018-09-30 19:27:49');
INSERT INTO `list` VALUES ('84', '../images/xx3.jpg', '新西兰goodhealth牛初乳2罐装·乳白色10', '', '282', '482', '4305', '2018-10-22 19:27:53');
INSERT INTO `list` VALUES ('85', '../images/xx4.jpg', '富昌 养生滋补皂角米168+桃胶168+雪燕35组合装8', '', '283', '483', '4306', '2018-10-09 19:27:56');
INSERT INTO `list` VALUES ('86', '../images/xx5.jpg', '韩后肌致赋颜精油霜8件组10', '', '284', '484', '4307', null);
INSERT INTO `list` VALUES ('87', '../images/xx6.jpg', ' SKG 8088S 养生壶全自动加厚玻璃家用多功能电热煮茶器黑花茶炖盅·8088S10', '', '285', '485', '4308', null);
INSERT INTO `list` VALUES ('88', '../images/xx7.jpg', '莺卡 羊毛尼松紧中腰哈伦裤·黑色8', '', '286', '486', '4309', null);
INSERT INTO `list` VALUES ('89', '../images/xx8.jpg', '玉真了和白玉仿古绞丝纹平安扣项链10', '', '287', '487', '4310', null);
INSERT INTO `list` VALUES ('90', '../images/xx9.jpg', '玉真了和白玉仿古绞丝纹平安扣项链20', '', '288', '488', '4311', null);

-- ----------------------------
-- Table structure for zuce
-- ----------------------------
DROP TABLE IF EXISTS `zuce`;
CREATE TABLE `zuce` (
  `uname` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of zuce
-- ----------------------------
INSERT INTO `zuce` VALUES ('13413684985', '123456');
INSERT INTO `zuce` VALUES ('13435927445', '123456');
INSERT INTO `zuce` VALUES ('13413684986', '111111');
INSERT INTO `zuce` VALUES ('13435927777', '111111');
INSERT INTO `zuce` VALUES ('13457534734', '111111');
SET FOREIGN_KEY_CHECKS=1;
