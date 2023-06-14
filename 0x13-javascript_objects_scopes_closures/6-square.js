#!/usr/bin/node
const Square1 = require('./5-square');
module.exports = class Square extends Square1 {
  charPrint (c) {
    let myChar;
    if (c === undefined) {
      myChar = 'X';
      for (let i = 0; i < this.width - 1; i++) {
        myChar += 'X';
      }
    } else {
      myChar = c;
      for (let i = 0; i < this.width - 1; i++) {
        myChar += c;
      }
    }
    for (let i = 0; i < this.height; i++) {
      console.log(myChar);
    }
  }
};
