#!/usr/bin/node
function * generator () {
  let index = 0;
  while (true) {
    yield index++;
  }
}

const gen = generator();

exports.logMe = function (item) {
  console.log(gen.next().value + ': ' + item);
};
