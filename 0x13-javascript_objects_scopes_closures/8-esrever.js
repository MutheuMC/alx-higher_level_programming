#!/usr/bin/node
exports.esrever = function (list) {
  const reversed = [];
  let index = 0;
  for (let i = list.length - 1; i > -1; i--) {
    reversed[index] = list[i];
    index++;
  }
  return reversed;
};
