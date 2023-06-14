#!/usr/bin/node
exports.converter = function (base) {
  function changeBase (num) {
    return num.toString(base);
  }

  return changeBase;
};
