/*
 * @Author: zhaoshuaiqiang
 * @Date: 2020-09-08 17:11:41
 * @LastEditTime: 2020-09-08 17:58:48
 * @LastEditors: zhaoshuaiqiang
 * @Description: main
 * @FilePath: /jsontoexcel/index.js
 */
const fs = require('fs');
const path = require('path');
const json2xls = require('json2xls');
// 读取源文件
const cities = require('./static/json/china_city.json');
// 转换成有效的格式
let cityList = [];
cities.forEach(({ province, cities }) => {
  if (province.includes('市')) {
    cityList.push({
      '省份': province,
      '城市': province,
    });
  }
  else {
    cities.forEach(({ name }) => {
      cityList.push({
        '省份': province,
        '城市': name,
      })
    })
  }
});

// 转换并导出
const xls = json2xls(cityList);
const filePath = './static/toFile/中国省市对应表.xlsx';
fs.writeFileSync(filePath, xls, 'binary');
console.log('转换完成，转换后的excel文件路径为: ', path.resolve(__dirname, filePath));
