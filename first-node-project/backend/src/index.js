const { request, response } = require('express');
const express = require('express');

const app = express();

/**
 * Métodos HTTP:
 * 
 * GET: Buscar informações do back-end.
 * POST: Criar uma informação no back-end.
 * PUT/PATCH: Alterar uma informação no back-end
 *    -> PUT (atualizando todas informações de uma vez)
 *    -> PATCH (atualizando uma informação específica)
 * DELETE: Quando queremos deletar alguma informação do back-end
 */

app.get('/projects', (request, response) => {
  return response.json([
    'Projeto 1',
    'Projeto 2',
  ]);
});

app.post('/projects', (request, response) => {
  return response.json([
    'Projeto 1',
    'Projeto 2',
    'Projeto 3',
    'Projeto 4',
  ]);
});

app.put('/projects/:id', (request, response) => {
  return response.json([
    'Projeto 1',
    'Projeto 2',
    'Projeto 3',
    'Projeto 5',
  ]);
});

app.listen(3333, () => {
  console.log('Backend Started 🚀')
});