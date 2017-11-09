const express = require("express");
const fs = require("fs");
const _ = require("lodash");
const http = require('http');

const app = express();
// a get request to our server
app.get("/", (request, response)=>{
  response.send("<h1>Sup<h1>");
});


app.listen(3000, ()=>{
  console.log("done fool")
});


// hostname - the url/ip address of server used to run
// const hostname = "127.0.0.1";
// const port = 3000;
//
// fs.readFile("index.html", (err, html)=> {
//   const server = http.createServer((request, response) => {
//     response.statusCode = 200;
//     response.setHeader('Content-type', 'text/html');
//     response.write("<h1>Hello once More</h1>")
//     response.end("Hello")
//   });
//   server.listen(port, hostname, ()=>{
//     console.log(port)
//   })
//
// })

// console.log("Hello")

//arrow function = an anonymous function written in ES6 shorthand
//basic anonymous function
// function(parameter) { }
// the shorthand version (arrow function)
// (parameter) => { }


// const server = http.createServer((request, response) => {
//   // magic happens here!
// });
