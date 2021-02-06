const fs = require('fs');

// NPM Stock-ticker-symbol
const stocks = require('stock-ticker-symbol');
 
stocks.lookup('AAPL'); // Apple Inc.;
 
stocks.lookup('ABCD'); // null;
 
stocks.search('apple');
// [ { name: 'Apple Hospitality REIT, Inc.', ticker: 'APLE' },
//   { name: 'Apple Inc.', ticker: 'AAPL' },
//   { name: 'Maui Land & Pineapple Company, Inc.', ticker: 'MLP' } ]
 
stocks.searchTicker('MSFT'); // [ { name: 'Microsoft Corporation', ticker: 'MSFT' } ]
 
stocks.searchTicker('OMG'); // []
 
stocks.searchName('alphabet'); // [ { name: 'Alphabet Inc.', ticker: 'GOOGL' } ]


console.log(stocks.lookup('AAPL'));
console.log(stocks.lookup('ABCD'));
console.log(stocks.search('apple'));
console.log(stocks.searchTicker('OMG'));
console.log(stocks.searchTicker('MSFT'));