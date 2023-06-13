#!/usr/bin/node

exports.addMeMaybe = function (number, theFunction) {
  const nb = parseInt(number) + 1;
  theFunction(nb);
};
