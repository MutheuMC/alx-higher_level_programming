#!/usr/bin/node
if (process.argv.length === 5) {
  const fs = require('fs');
  fs.readFile(process.argv[2], 'utf8', function (err, data) {
    if (err) {
      throw err;
    }
    fs.readFile(process.argv[3], 'utf8', function (err, data2) {
      if (err) {
        throw err;
      }
      fs.writeFile(process.argv[4], data + data2, function (err) {
        if (err) {
          throw err;
        }
      });
    });
  });
}
