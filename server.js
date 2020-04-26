const http = require('http');
const { port } = require('./config');
const { ds } = require('./api/connection');
//Import api
const { getTeachers } = require('./api/teachers/getTeachers')

const requestListener = function (req, res) {
  res.writeHead(200);
  res.end('Server start!!!, port '+ port);
}

const server = http.createServer(requestListener);
server.listen(port, () =>{
    getTeachers(ds, "ejisselgb", "12345678"); // insecury login
});


