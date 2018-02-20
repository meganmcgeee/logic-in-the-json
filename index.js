const jsonLogic = require('json-logic-js');
const JSL = require('lib-jsl');


// Map

var rules = {
  "map": [{
      "var": "integers"
    },
    {
      "*": [{
        "var": ""
      }, 8]
    }
  ]
}


// Map *8 to each item in array and print result
var data = {
  "integers": [1, 2, 3, 4, 5]
}
console.log("Map *8 to each item in array([1, 2, 3, 4, 5]) and print result.");

console.log(jsonLogic.apply(rules, data));


// Print element[1] in the array
console.log('Print element[1] in the array: ["apple", "banana", "carrot"]');

console.log(jsonLogic.apply({
  "var": 1
}, ["apple", "banana", "carrot"]));

// Combine two JSON objects with JSL

var offer = {
  offerer: 'sandeep',
  bidder: '$bidder',
  symbol: 'ABC',
  price: 10,
  qty: 100
}

var bid = [{
  offerer: '$offerer',
  bidder: 'kavi',
  symbol: 'ABC',
  price: 10,
  qty: 100
}]



var jsl = new JSL({
  rules: [bid],
  query: [offer]
});

console.log("Combine two JSON objects with JSL.")
var response = jsl.run();
console.log(response);

