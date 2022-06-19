/*
 Navicat Premium Data Transfer

 Source Server         : localhost
 Source Server Type    : MySQL
 Source Server Version : 80015
 Source Host           : 127.0.0.1:3306
 Source Schema         : python

 Target Server Type    : MySQL
 Target Server Version : 80015
 File Encoding         : 65001

 Date: 20/09/2020 15:25:04
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Database structure for job
-- ----------------------------
CREATE DATABASE IF NOT EXISTS `python` DEFAULT CHARACTER SET utf8 ;
USE `python`;


-- ----------------------------
-- Table structure for job
-- ----------------------------
DROP TABLE IF EXISTS `job`;
CREATE TABLE `job`  (
  `year` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `province` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `number` int(11) NULL DEFAULT NULL
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of job
-- ----------------------------
INSERT INTO `job` VALUES ('2013', '上海', 66);
INSERT INTO `job` VALUES ('2015', '宁夏', 3);
INSERT INTO `job` VALUES ('2014', '上海', 56);
INSERT INTO `job` VALUES ('2016', '上海', 461);
INSERT INTO `job` VALUES ('2019', '上海', 864);
INSERT INTO `job` VALUES ('2020', '上海', 993);
INSERT INTO `job` VALUES ('2014', '云南', 23);
INSERT INTO `job` VALUES ('2015', '云南', 27);
INSERT INTO `job` VALUES ('2017', '上海', 591);
INSERT INTO `job` VALUES ('2018', '上海', 655);
INSERT INTO `job` VALUES ('2016', '云南', 51);
INSERT INTO `job` VALUES ('2013', '云南', 2);
INSERT INTO `job` VALUES ('2017', '云南', 122);
INSERT INTO `job` VALUES ('2018', '云南', 192);
INSERT INTO `job` VALUES ('2018', '内蒙古', 95);
INSERT INTO `job` VALUES ('2019', '云南', 255);
INSERT INTO `job` VALUES ('2020', '云南', 246);
INSERT INTO `job` VALUES ('2013', '内蒙古', 0);
INSERT INTO `job` VALUES ('2014', '内蒙古', 2);
INSERT INTO `job` VALUES ('2014', '吉林', 6);
INSERT INTO `job` VALUES ('2015', '内蒙古', 20);
INSERT INTO `job` VALUES ('2017', '内蒙古', 51);
INSERT INTO `job` VALUES ('2015', '吉林', 20);
INSERT INTO `job` VALUES ('2020', '内蒙古', 157);
INSERT INTO `job` VALUES ('2013', '北京', 40);
INSERT INTO `job` VALUES ('2014', '北京', 103);
INSERT INTO `job` VALUES ('2015', '北京', 154);
INSERT INTO `job` VALUES ('2016', '北京', 252);
INSERT INTO `job` VALUES ('2018', '北京', 654);
INSERT INTO `job` VALUES ('2019', '北京', 1157);
INSERT INTO `job` VALUES ('2019', '吉林', 155);
INSERT INTO `job` VALUES ('2020', '北京', 1327);
INSERT INTO `job` VALUES ('2013', '台湾', 1);
INSERT INTO `job` VALUES ('2014', '台湾', 3);
INSERT INTO `job` VALUES ('2016', '台湾', 9);
INSERT INTO `job` VALUES ('2013', '河北', 1);
INSERT INTO `job` VALUES ('2014', '河北', 9);
INSERT INTO `job` VALUES ('2019', '内蒙古', 143);
INSERT INTO `job` VALUES ('2017', '台湾', 23);
INSERT INTO `job` VALUES ('2018', '台湾', 53);
INSERT INTO `job` VALUES ('2019', '台湾', 75);
INSERT INTO `job` VALUES ('2020', '台湾', 38);
INSERT INTO `job` VALUES ('2018', '四川', 453);
INSERT INTO `job` VALUES ('2013', '吉林', 0);
INSERT INTO `job` VALUES ('2016', '吉林', 34);
INSERT INTO `job` VALUES ('2017', '吉林', 47);
INSERT INTO `job` VALUES ('2015', '上海', 331);
INSERT INTO `job` VALUES ('2018', '吉林', 110);
INSERT INTO `job` VALUES ('2020', '吉林', 166);
INSERT INTO `job` VALUES ('2013', '四川', 8);
INSERT INTO `job` VALUES ('2014', '四川', 45);
INSERT INTO `job` VALUES ('2015', '四川', 112);
INSERT INTO `job` VALUES ('2017', '北京', 396);
INSERT INTO `job` VALUES ('2016', '内蒙古', 26);
INSERT INTO `job` VALUES ('2015', '河北', 26);
INSERT INTO `job` VALUES ('2016', '河北', 34);
INSERT INTO `job` VALUES ('2016', '四川', 142);
INSERT INTO `job` VALUES ('2017', '四川', 242);
INSERT INTO `job` VALUES ('2013', '宁夏', 0);
INSERT INTO `job` VALUES ('2019', '四川', 710);
INSERT INTO `job` VALUES ('2020', '四川', 156);
INSERT INTO `job` VALUES ('2013', '天津', 4);
INSERT INTO `job` VALUES ('2014', '天津', 13);
INSERT INTO `job` VALUES ('2016', '天津', 28);
INSERT INTO `job` VALUES ('2016', '山西', 33);
INSERT INTO `job` VALUES ('2015', '台湾', 11);
INSERT INTO `job` VALUES ('2017', '天津', 62);
INSERT INTO `job` VALUES ('2018', '天津', 123);
INSERT INTO `job` VALUES ('2019', '天津', 106);
INSERT INTO `job` VALUES ('2020', '天津', 156);
INSERT INTO `job` VALUES ('2014', '宁夏', 0);
INSERT INTO `job` VALUES ('2016', '宁夏', 7);
INSERT INTO `job` VALUES ('2018', '宁夏', 25);
INSERT INTO `job` VALUES ('2019', '宁夏', 37);
INSERT INTO `job` VALUES ('2020', '宁夏', 34);
INSERT INTO `job` VALUES ('2013', '安徽', 1);
INSERT INTO `job` VALUES ('2014', '安徽', 13);
INSERT INTO `job` VALUES ('2019', '安徽', 378);
INSERT INTO `job` VALUES ('2020', '安徽', 403);
INSERT INTO `job` VALUES ('2013', '山东', 3);
INSERT INTO `job` VALUES ('2014', '山东', 20);
INSERT INTO `job` VALUES ('2015', '山东', 63);
INSERT INTO `job` VALUES ('2015', '天津', 14);
INSERT INTO `job` VALUES ('2016', '山东', 106);
INSERT INTO `job` VALUES ('2018', '山东', 446);
INSERT INTO `job` VALUES ('2019', '山东', 674);
INSERT INTO `job` VALUES ('2020', '山东', 766);
INSERT INTO `job` VALUES ('2013', '山西', 2);
INSERT INTO `job` VALUES ('2014', '山西', 3);
INSERT INTO `job` VALUES ('2015', '山西', 26);
INSERT INTO `job` VALUES ('2017', '山西', 37);
INSERT INTO `job` VALUES ('2017', '新疆', 204);
INSERT INTO `job` VALUES ('2017', '安徽', 128);
INSERT INTO `job` VALUES ('2018', '山西', 98);
INSERT INTO `job` VALUES ('2019', '山西', 119);
INSERT INTO `job` VALUES ('2020', '山西', 143);
INSERT INTO `job` VALUES ('2017', '宁夏', 6);
INSERT INTO `job` VALUES ('2013', '广东', 29);
INSERT INTO `job` VALUES ('2014', '广东', 117);
INSERT INTO `job` VALUES ('2015', '广东', 270);
INSERT INTO `job` VALUES ('2019', '广东', 1352);
INSERT INTO `job` VALUES ('2020', '广东', 1593);
INSERT INTO `job` VALUES ('2013', '广西', 1);
INSERT INTO `job` VALUES ('2016', '广西', 44);
INSERT INTO `job` VALUES ('2017', '广西', 60);
INSERT INTO `job` VALUES ('2018', '广西', 157);
INSERT INTO `job` VALUES ('2017', '山东', 218);
INSERT INTO `job` VALUES ('2019', '广西', 242);
INSERT INTO `job` VALUES ('2020', '广西', 193);
INSERT INTO `job` VALUES ('2013', '新疆', 3);
INSERT INTO `job` VALUES ('2014', '新疆', 20);
INSERT INTO `job` VALUES ('2015', '新疆', 86);
INSERT INTO `job` VALUES ('2016', '新疆', 104);
INSERT INTO `job` VALUES ('2018', '新疆', 322);
INSERT INTO `job` VALUES ('2019', '新疆', 555);
INSERT INTO `job` VALUES ('2015', '安徽', 30);
INSERT INTO `job` VALUES ('2016', '安徽', 60);
INSERT INTO `job` VALUES ('2018', '安徽', 242);
INSERT INTO `job` VALUES ('2020', '新疆', 588);
INSERT INTO `job` VALUES ('2013', '江苏', 10);
INSERT INTO `job` VALUES ('2014', '江苏', 66);
INSERT INTO `job` VALUES ('2015', '江苏', 125);
INSERT INTO `job` VALUES ('2016', '江苏', 136);
INSERT INTO `job` VALUES ('2017', '江苏', 258);
INSERT INTO `job` VALUES ('2018', '江苏', 477);
INSERT INTO `job` VALUES ('2019', '江苏', 675);
INSERT INTO `job` VALUES ('2020', '江苏', 752);
INSERT INTO `job` VALUES ('2013', '江西', 4);
INSERT INTO `job` VALUES ('2014', '江西', 7);
INSERT INTO `job` VALUES ('2015', '江西', 25);
INSERT INTO `job` VALUES ('2016', '江西', 34);
INSERT INTO `job` VALUES ('2017', '江西', 76);
INSERT INTO `job` VALUES ('2018', '江西', 190);
INSERT INTO `job` VALUES ('2019', '江西', 252);
INSERT INTO `job` VALUES ('2020', '江西', 318);
INSERT INTO `job` VALUES ('2017', '河北', 98);
INSERT INTO `job` VALUES ('2018', '河北', 193);
INSERT INTO `job` VALUES ('2016', '广东', 312);
INSERT INTO `job` VALUES ('2017', '广东', 641);
INSERT INTO `job` VALUES ('2018', '广东', 1136);
INSERT INTO `job` VALUES ('2019', '河北', 287);
INSERT INTO `job` VALUES ('2020', '河北', 445);
INSERT INTO `job` VALUES ('2013', '河南', 3);
INSERT INTO `job` VALUES ('2014', '河南', 9);
INSERT INTO `job` VALUES ('2015', '河南', 32);
INSERT INTO `job` VALUES ('2016', '河南', 68);
INSERT INTO `job` VALUES ('2017', '河南', 139);
INSERT INTO `job` VALUES ('2014', '澳门', 6);
INSERT INTO `job` VALUES ('2015', '澳门', 5);
INSERT INTO `job` VALUES ('2016', '澳门', 11);
INSERT INTO `job` VALUES ('2018', '河南', 282);
INSERT INTO `job` VALUES ('2019', '河南', 441);
INSERT INTO `job` VALUES ('2020', '河南', 503);
INSERT INTO `job` VALUES ('2013', '浙江', 23);
INSERT INTO `job` VALUES ('2014', '浙江', 39);
INSERT INTO `job` VALUES ('2018', '浙江', 659);
INSERT INTO `job` VALUES ('2019', '浙江', 759);
INSERT INTO `job` VALUES ('2020', '浙江', 821);
INSERT INTO `job` VALUES ('2013', '海南', 0);
INSERT INTO `job` VALUES ('2014', '海南', 23);
INSERT INTO `job` VALUES ('2016', '海南', 12);
INSERT INTO `job` VALUES ('2018', '海南', 54);
INSERT INTO `job` VALUES ('2019', '海南', 590);
INSERT INTO `job` VALUES ('2020', '海南', 791);
INSERT INTO `job` VALUES ('2013', '湖北', 5);
INSERT INTO `job` VALUES ('2017', '湖北', 234);
INSERT INTO `job` VALUES ('2018', '湖北', 279);
INSERT INTO `job` VALUES ('2019', '湖北', 596);
INSERT INTO `job` VALUES ('2020', '湖北', 668);
INSERT INTO `job` VALUES ('2013', '湖南', 3);
INSERT INTO `job` VALUES ('2014', '湖南', 32);
INSERT INTO `job` VALUES ('2015', '湖南', 95);
INSERT INTO `job` VALUES ('2016', '湖南', 151);
INSERT INTO `job` VALUES ('2017', '湖南', 263);
INSERT INTO `job` VALUES ('2014', '广西', 8);
INSERT INTO `job` VALUES ('2015', '广西', 28);
INSERT INTO `job` VALUES ('2018', '湖南', 367);
INSERT INTO `job` VALUES ('2019', '湖南', 438);
INSERT INTO `job` VALUES ('2020', '湖南', 855);
INSERT INTO `job` VALUES ('2013', '澳门', 2);
INSERT INTO `job` VALUES ('2017', '澳门', 8);
INSERT INTO `job` VALUES ('2018', '澳门', 28);
INSERT INTO `job` VALUES ('2019', '澳门', 24);
INSERT INTO `job` VALUES ('2020', '澳门', 22);
INSERT INTO `job` VALUES ('2013', '甘肃', 0);
INSERT INTO `job` VALUES ('2016', '西藏', 10);
INSERT INTO `job` VALUES ('2017', '西藏', 39);
INSERT INTO `job` VALUES ('2014', '甘肃', 5);
INSERT INTO `job` VALUES ('2015', '甘肃', 18);
INSERT INTO `job` VALUES ('2016', '甘肃', 26);
INSERT INTO `job` VALUES ('2015', '海南', 4);
INSERT INTO `job` VALUES ('2015', '浙江', 106);
INSERT INTO `job` VALUES ('2016', '浙江', 114);
INSERT INTO `job` VALUES ('2017', '浙江', 257);
INSERT INTO `job` VALUES ('2017', '海南', 40);
INSERT INTO `job` VALUES ('2017', '甘肃', 45);
INSERT INTO `job` VALUES ('2018', '甘肃', 80);
INSERT INTO `job` VALUES ('2019', '甘肃', 83);
INSERT INTO `job` VALUES ('2020', '甘肃', 94);
INSERT INTO `job` VALUES ('2013', '福建', 4);
INSERT INTO `job` VALUES ('2014', '福建', 23);
INSERT INTO `job` VALUES ('2015', '福建', 55);
INSERT INTO `job` VALUES ('2016', '福建', 71);
INSERT INTO `job` VALUES ('2017', '福建', 127);
INSERT INTO `job` VALUES ('2018', '福建', 276);
INSERT INTO `job` VALUES ('2019', '福建', 424);
INSERT INTO `job` VALUES ('2020', '福建', 425);
INSERT INTO `job` VALUES ('2013', '西藏', 0);
INSERT INTO `job` VALUES ('2014', '西藏', 0);
INSERT INTO `job` VALUES ('2015', '西藏', 3);
INSERT INTO `job` VALUES ('2018', '西藏', 34);
INSERT INTO `job` VALUES ('2019', '西藏', 49);
INSERT INTO `job` VALUES ('2020', '西藏', 40);
INSERT INTO `job` VALUES ('2013', '贵州', 10);
INSERT INTO `job` VALUES ('2014', '贵州', 30);
INSERT INTO `job` VALUES ('2015', '贵州', 20);
INSERT INTO `job` VALUES ('2016', '贵州', 19);
INSERT INTO `job` VALUES ('2017', '贵州', 47);
INSERT INTO `job` VALUES ('2018', '贵州', 80);
INSERT INTO `job` VALUES ('2019', '贵州', 143);
INSERT INTO `job` VALUES ('2020', '贵州', 157);
INSERT INTO `job` VALUES ('2015', '香港', 26);
INSERT INTO `job` VALUES ('2016', '香港', 27);
INSERT INTO `job` VALUES ('2013', '辽宁', 3);
INSERT INTO `job` VALUES ('2014', '辽宁', 12);
INSERT INTO `job` VALUES ('2015', '辽宁', 48);
INSERT INTO `job` VALUES ('2014', '湖北', 25);
INSERT INTO `job` VALUES ('2015', '湖北', 57);
INSERT INTO `job` VALUES ('2016', '湖北', 76);
INSERT INTO `job` VALUES ('2016', '辽宁', 50);
INSERT INTO `job` VALUES ('2017', '辽宁', 147);
INSERT INTO `job` VALUES ('2018', '辽宁', 184);
INSERT INTO `job` VALUES ('2019', '辽宁', 250);
INSERT INTO `job` VALUES ('2020', '辽宁', 292);
INSERT INTO `job` VALUES ('2013', '重庆', 4);
INSERT INTO `job` VALUES ('2016', '重庆', 48);
INSERT INTO `job` VALUES ('2017', '重庆', 109);
INSERT INTO `job` VALUES ('2018', '重庆', 204);
INSERT INTO `job` VALUES ('2017', '黑龙江', 67);
INSERT INTO `job` VALUES ('2016', '黑龙江', 33);
INSERT INTO `job` VALUES ('2019', '重庆', 290);
INSERT INTO `job` VALUES ('2020', '重庆', 281);
INSERT INTO `job` VALUES ('2013', '陕西', 2);
INSERT INTO `job` VALUES ('2015', '陕西', 40);
INSERT INTO `job` VALUES ('2016', '陕西', 57);
INSERT INTO `job` VALUES ('2017', '陕西', 106);
INSERT INTO `job` VALUES ('2018', '陕西', 190);
INSERT INTO `job` VALUES ('2019', '陕西', 296);
INSERT INTO `job` VALUES ('2020', '陕西', 318);
INSERT INTO `job` VALUES ('2013', '青海', 0);
INSERT INTO `job` VALUES ('2014', '青海', 0);
INSERT INTO `job` VALUES ('2015', '青海', 1);
INSERT INTO `job` VALUES ('2016', '青海', 4);
INSERT INTO `job` VALUES ('2017', '青海', 25);
INSERT INTO `job` VALUES ('2018', '青海', 42);
INSERT INTO `job` VALUES ('2019', '青海', 62);
INSERT INTO `job` VALUES ('2020', '青海', 44);
INSERT INTO `job` VALUES ('2013', '香港', 0);
INSERT INTO `job` VALUES ('2014', '香港', 3);
INSERT INTO `job` VALUES ('2017', '香港', 46);
INSERT INTO `job` VALUES ('2018', '香港', 91);
INSERT INTO `job` VALUES ('2019', '香港', 99);
INSERT INTO `job` VALUES ('2020', '香港', 129);
INSERT INTO `job` VALUES ('2013', '黑龙江', 1);
INSERT INTO `job` VALUES ('2014', '黑龙江', 1);
INSERT INTO `job` VALUES ('2015', '黑龙江', 19);
INSERT INTO `job` VALUES ('2018', '黑龙江', 109);
INSERT INTO `job` VALUES ('2019', '黑龙江', 176);
INSERT INTO `job` VALUES ('2014', '陕西', 11);
INSERT INTO `job` VALUES ('2020', '黑龙江', 272);
INSERT INTO `job` VALUES ('2014', '重庆', 15);
INSERT INTO `job` VALUES ('2015', '重庆', 30);

SET FOREIGN_KEY_CHECKS = 1;
