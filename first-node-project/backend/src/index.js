const { request } = require('express');
const express = require('express');

const app = express();

app.get('/projects', (request, response) => {
  return response.send('Hello World');
})

app.listen(3333);