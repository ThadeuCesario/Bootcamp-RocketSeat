const { request } = require('express');
const express = require('express');

const app = express();

app.get('/projects', (request, response) => {
  return response.json({message: 'Hello Gostack'});
});

app.listen(3333);