//const logger = require('./logger');

//console.log(logger);

//logger.message("new message");
//const os=require('os');
//console.log(os.hostname())
//console.log(os.machine())
//console.log(os.platform())
//console.log(os.totalmem())
//console.log(os.userInfo())
//console.log(os.freemem())




//const os =require('path');
//console.log(__dirname)
//console.log(os.basename(__dirname+'app.js'));
//console.log(os.extname(__dirname+'app.js'));//.js

const fs = require('fs');

console.log("Before call");

const server = require('http');

//server.createServer(function(req,res){
// fs.readFile("index.html",function(err,SUCC){
// if(err){
//   console.log("error");
//  res.write("ERROR");
// return res.end();
//}
//else{
//res.writeHead(200,{'Content-Type':'text/html'})
//console.log("success");
// res.write("Hi Hello How R U");
//return res.end();
//}
// })

//})


//console.log("After call");

var fsData;
try {
    fsData = fs.readFileSync("index.html");
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(fsData);
    return res.end();
} catch (error) {
    res.write("ERROR");
    res.writeHead(200, { 'Content-Type': 'text/html' });
    return res.end();
}


