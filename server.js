var express = require("express");
var app = express();
var router = express.Router();
var path = __dirname + '/views/';

router.use(function (req,res,next) {
  console.log("/" + req.method);
  next();
});

router.get("/",function(req,res){
  res.sendFile(path + "index.html");
});

router.get("/about",function(req,res){
  res.sendFile(path + "about.html");
});

router.get("/contact",function(req,res){
  res.sendFile(path + "contact.html");
});

app.use("/",router);

app.use("*",function(req,res){
  res.sendFile(path + "404.html");
});

app.listen(3000,function(){
  console.log("Live at Port 3000");
});




// 'use strict';
// //version 1.1.1
// const express = require('express');
// const SocketServer = require('ws').Server;
// const path = require('path');

// const PORT = process.env.PORT || 3000;
// const INDEX = path.join(__dirname, 'index.html');

// const server = express()
//   .use((req, res) => res.sendFile(INDEX) )
//   .listen(PORT, () => console.log(`Listening on ${ PORT }`));

// ///////////////////////////////////////////////////////////////////////////////////////////

// const wss = new SocketServer({ server });

// wss.on('connection', (ws) => {
//   console.log('Client connected');
//   ws.on('close', () => console.log('Client has disconnected'));
// });

// setInterval(() => {
//   wss.clients.forEach((client) => {
//     client.send(new Date().toTimeString());
//   });
// }, 1000);







// //tested ditto











//     // var pg = require('pg');
    
//     // server.get('/db', function (request, response) {
//     //   pg.connect(process.env.DATABASE_URL, function(err, client, done) {
//     //     client.query('SELECT * FROM test_table', function(err, result) {
//     //       done();
//     //       if (err)
//     //        { console.error(err); response.send("Error " + err); }
//     //       else
//     //        { 
//     //          console.log(result.rows);
//     //           response.render('pages/db', {results: result.rows} ); 4
//     //       }
//     //     });
//     //   });
//     // });

