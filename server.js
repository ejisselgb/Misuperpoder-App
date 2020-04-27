const http = require('http');
const { port, temp_pass } = require('./config');
const { ds } = require('./api/connection');

//Import api
//const { getTeachers } = require('./api/teachers/getTeachers');
//const { createStudents } = require('./api/students/createStudents')
const { getStudents } = require('./api/students/getStudents')

const requestListener = function (req, res) {
  res.writeHead(200);
  res.end('Server start!!!, port '+ port);
}

const server = http.createServer(requestListener);
server.listen(port, () =>{
    //getTeachers(ds, "ejisselgb", temp_pass); // insecury login
    //createStudents(ds); //create user
    getStudents();
});


