'use strict';

const express = require('express');

// Constants
const PORT = 4001;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hi there, this is deployment file which uses Ingress using Github actions :)');
});

app.get('/test', (req, res) => {
  res.send('Testing');
});


app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
