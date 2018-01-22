'use strict';
//version 1.1.1
var express = require('express');
const SocketServer = require('ws').Server;
const path = require('path');

const PORT = process.env.PORT || 3000;
const INDEX = path.join(__dirname, 'index.html');
// const ABOUT = path.join(__dirname, 'about.html');

var app = express()
.use('/resource', express.static( "public" ) )
.use((req, res) => res.sendFile(INDEX))
.listen(PORT, () => console.log(`Listening on ${ PORT }`));


//   // .set('view engine', 'ejs')


// // ///////////////////////////////////////////////////////////////////////////////////////////

// const wss = new SocketServer({ app });

// wss.on('connection', (ws) => {
//   console.log('Client connected');
//   ws.on('close', () => console.log('Client has disconnected'));
// });

// setInterval(() => {
//   wss.clients.forEach((client) => {
//     // var d = new Date(); // The 0 there is the key, which sets the date to the epoch
//   	// // d.setUTCSeconds(thetime);
	
//     // var globalSeconds = ;
//     // new Date().toTimeString()
//     // var dt = 3;
//     // var dt2 = new Date().getSeconds().toTimeString();
  
//     // var timenow = new Date().toTimeString();
//     client.send("test");
//   });
// }, 1000);