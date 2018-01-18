'use strict';
//version 1.1.1
const express = require('express');
const SocketServer = require('ws').Server;
const path = require('path');
global._ = require('current_progress');

const PORT = process.env.PORT || 3000;
const INDEX = path.join(__dirname, 'index.html');
const JSFILES = path.join(__dirname, 'jsfiles/');

const server = express()
  .set('view engine', 'ejs')
  .use((req, res) => res.sendFile(INDEX))
  .use('/scripts', express.static(JSFILES))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`));

///////////////////////////////////////////////////////////////////////////////////////////

const wss = new SocketServer({ server });

wss.on('connection', (ws) => {
  console.log('Client connected');
  ws.on('close', () => console.log('Client has disconnected'));
});

setInterval(() => {
  wss.clients.forEach((client) => {
    var timenow = new Date().toTimeString();
    client.send(timenow);
  });
}, 1000);