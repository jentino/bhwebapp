'use strict';
//version 1.1.1
const express = require('express');
const SocketServer = require('ws').Server;
const path = require('path');

const PORT = process.env.PORT || 3000;
const INDEX = path.join(__dirname, 'index.html');

const server = express()
  .set('view engine', 'ejs')
  .use((req, res) => res.sendFile(INDEX))
  // .use(express.static('js'))
  .use('/scripts',express.static(__dirname + 'assets/'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`));

///////////////////////////////////////////////////////////////////////////////////////////

const wss = new SocketServer({ server });

wss.on('connection', (ws) => {
  console.log('Client connected');
  ws.on('close', () => console.log('Client has disconnected'));
});

setInterval(() => {
  wss.clients.forEach((client) => {
    client.send(new Date().toTimeString());
  });
}, 1000);