#!/usr/bin/node
const request = require('request');
request(process.argv[2], function (error, response, body) {
  if (error) {
    console.log(error);
  } else {
    let movies = 0;
    const data = JSON.parse(body);
    for (const val of data.results) {
      for (const val2 of val.characters) {
        if (val2.search('18/') > 0) {
          movies++;
        }
      }
    }
    console.log(movies);
  }
});
