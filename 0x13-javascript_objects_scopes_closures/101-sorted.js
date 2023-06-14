#!/usr/bin/node
const dataDict = require('./101-data');
const myDict = {};
for (const key in dataDict.dict) {
  myDict[dataDict.dict[key]] = [];
}

for (const key in dataDict.dict) {
  myDict[dataDict.dict[key]].push(key);
}
console.log(myDict);
