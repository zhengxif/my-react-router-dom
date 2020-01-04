const {pathToRegexp} = require('path-to-regexp');

let keys = [];
let path = '/user/list/:id/:name';
let result = pathToRegexp(path, keys, {end: true});

console.log(result, keys);