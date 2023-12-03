const fs = require('fs');
console.log('First call before executing the main function')

const server = require('http');
server.createServer(function (req, res) {
    console.log("req query" + req.url)
    var aProductData = require('./products');
    const url = require('url');
    const oParse = url.parse(req.url, true);

    var aProductFilter = [];
    if (!oParse.search) {
        aProductFilter = aProductData;
    } else {
        var aDynamicKey = Object.keys(oParse.query);
        console.log(aDynamicKey);
        var sKey = aDynamicKey[0];
        var sValue = oParse.query[sKey];
        aProductFilter = aProductData.filter(function (e) {
            return e[sKey] == sValue
        });

    }
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(JSON.stringify(aProductFilter));
    return res.end();

}).listen(3009)

console.log('last call after executing the function');


