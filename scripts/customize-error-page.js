/* eslint-disable no-console */
const fs = require('fs');
const path = require('path');

fs.copyFile(
  path.join(__dirname, 'error.html'),
  path.join(__dirname, '../.nuxt/views/error.html'),
  err => {
    if (err) throw err;
    console.log('error.html 替换成功');
  });
