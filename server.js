const http = require('http');

const requestListener = function (req, res) {
  res.writeHead(200);
  res.end('Server start, port 8080');
}

const server = http.createServer(requestListener);
server.listen(8080);