const http = require('http');

// rota para /projects/:id
function handleProjectRoute(req, res, projectId) {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end(`Voce acessou o projeto com o ID: ${projectId}`);
}

function handle404(req, res) {
  res.writeHead(404, { 'Content-Type': 'text/plain' });
  res.end('Erro 404');
}

const server = http.createServer((req, res) => {
  const url = req.url;

  //aceita apenas /projects/:id
  const projectRouteRegex = /^\/projects\/([0-9]+)$/;
  const match = url.match(projectRouteRegex);

  if (match) {
    const projectId = match[1];
    handleProjectRoute(req, res, projectId);
  } else {
    handle404(req, res);
  }
});

const port = 3000;

server.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
