'use strict';
//version 1.1.1
var express = require('express');
const PORT = process.env.PORT || 3000;

var app = express();
app.use('/resource', express.static( "public" ) );
app.listen(PORT, () => console.log(`Listening on ${ PORT }`));


// const express = require('express');
// const SocketServer = require('ws').Server;
// const path = require('path');

// const PORT = process.env.PORT || 3000;
// const INDEX = path.join(__dirname, 'index.html');
// // const PUB = path.join(__dirname, 'public/');


// const server = express()
//   // .set('view engine', 'ejs')
//   // .use(express.static(__dirname + '/public'))
//   .use((req, res) => res.sendFile(INDEX))
//   .use(express.static(PUB))

// ///////////////////////////////////////////////////////////////////////////////////////////

// const wss = new SocketServer({ server });

// wss.on('connection', (ws) => {
//   console.log('Client connected');
//   ws.on('close', () => console.log('Client has disconnected'));
// });

// setInterval(() => {
//   wss.clients.forEach((client) => {
//     // var d = new Date(); // The 0 there is the key, which sets the date to the epoch
//   	// // d.setUTCSeconds(thetime);
	
//     // var globalSeconds = ;

//     // var dt = 3;
//     // var dt2 = dt.getSeconds();
  
//     // var timenow = new Date().toTimeString();
//     client.send(new Date('July 20, 69 00:20:18'));
//   });
// }, 1000);