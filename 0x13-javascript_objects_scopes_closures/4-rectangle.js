#!/usr/bin/node
module.exports = class Rectangle {
  constructor (w, h) {
    if (w > 0 && h > 0) {
      this.width = w;
      this.height = h;
    }
  }

  print () {
    let myString = 'X';
    for (let i = 0; i < this.width - 1; i++) {
      myString += 'X';
    }
    for (let i = 0; i < this.height; i++) {
      console.log(myString);
    }
  }

  rotate () {
    const temp = this.width;
    this.width = this.height;
    this.height = temp;
  }

  double () {
    this.width *= 2;
    this.height *= 2;
  }
};
