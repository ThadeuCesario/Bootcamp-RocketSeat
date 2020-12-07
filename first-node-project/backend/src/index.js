const { request, response, json } = require('express');
const {uuid} = require('uuidv4');
const express = require('express');

const app = express();
app.use(json());

/**
 * Métodos HTTP:
 * 
 * GET: Buscar informações do back-end.
 * POST: Criar uma informação no back-end.
 * PUT/PATCH: Alterar uma informação no back-end
 *    -> PUT (atualizando todas informações de uma vez)
 *    -> PATCH (atualizando uma informação específica)
 * DELETE: Quando queremos deletar alguma informação do back-end
 * 
 * 
 * Tipos de parâmetros:
 * 
 * Query Params: 
 *  Vamos utilizar principalmente para filtros e paginação
 * 
 * Rute Params:
 *  Identificar recursos para atualizar ou deletar
 *  
 * Request Body:
 * Conteúdo na hora de criar ou editar um recurso
 *  Essas informações são em JSON. 
 */

 const  projects = [];

app.get('/projects', (request, response) => {
  return response.json(projects);
});

app.post('/projects', (request, response) => {
  const {title, owner} = request.body;
  const project = {
    id: uuid(),
    title,
    owner,
  };
  projects.push(project);

  return response.json(project);
});

app.put('/projects/:id', (request, response) => {
  return response.json([
    'Projeto 1',
    'Projeto 2',
    'Projeto 3',
    'Projeto 5',
  ]);
});

app.delete('/projects/:id', (request, response) => {
  return response.json([
    'Projeto 1',
    'Projeto 2',
    'Projeto 3',
  ]);
});

app.listen(3333, () => {
  console.log('Backend Started 🚀')
});