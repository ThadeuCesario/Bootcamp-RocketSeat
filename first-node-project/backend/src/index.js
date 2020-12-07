const { request, response, json } = require('express');
const {uuid, isUuid} = require('uuidv4');
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
 * 
 * Middleware:
 * Um middleware é um intereceptador de requisições.
 * Podendo interromper totalmente a requisição ou pode alterar dados da requisição.
 * O formato de um middleware é uma função.
 * Todas as rotas podem ser consideradas middlewares, pois pegam os dados da requisição e retornam algo novo.
 * Utilizaremos o s middlewares quando queremos que um trecho de código seja disparado em uma ou mais rotas de nossa aplicação.
 * 
 * Se não chamarmos a função next() dentro de nosso middleware, o próximo middleware não será disparado.
 */

 /**
  * Estamos utilizando a memória de nossa aplicação para armazenar nossos dados. 
  * Detalhe que isso é apenas para nosso estudo. Jamais devemos aplicar esse método em produção.
  */
 const  projects = [];

function logRequests(request, response, next) {
  const {method, url} = request;
  const logLabel = `[${method.toUpperCase()} ${url}]`;
  console.log('1');
  console.time(logLabel);
  next();
  console.log('2');
  console.timeEnd(logLabel);
}

function validateProjectId(request, response, next) {
  const {id} = request.params;

  if (!isUuid(id)) {
    return response.status(400).json({error: 'Invalid project ID. '});
  }

  return next();
}

app.use(logRequests);

app.get('/projects', (request, response) => {
  console.log('3');
  const {title} = request.query;
  const filteredProjects = title ? projects.filter(project  => project.title.includes(title)) : projects; 
  return response.json(filteredProjects);
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

app.put('/projects/:id', validateProjectId, (request, response) => {
  const {id} = request.params;
  const {title, owner} = request.body;
  const projectIndex = projects.findIndex(project => project.id === id);
  
  if(projectIndex < 0) {
    return response.status(400).json({error: 'Project Not Found'});
  }

  const project = {
    id,
    title,
    owner,
  }

  projects[projectIndex] = project;
  return response.json(project);
});

app.delete('/projects/:id', validateProjectId, (request, response) => {
  const {id} = request.params;
  const projectIndex = projects.findIndex(project => project.id === id);
  
  if(projectIndex < 0) {
    return response.status(400).json({error: 'Project Not Found'});
  }
  
  projects.splice(projectIndex, 1);

  /* Veja que para o delete, estamos apenas deletando a informação e não retornamos nada. 
   * Para esses casos o status ideal de retorno é o 204.
   */
  return response.status(204).send();
});

app.listen(3333, () => {
  console.log('Backend Started 🚀')
});