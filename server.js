const http = require('http');
const { port, temp_pass } = require('./config');
const { connectionJexia } = require('./src/connection');
const { progress_data } = require('./assets/dummy_data/dummyData')

//Import api
const { createDataset } = require('./src/api/create/createDataset');
const { getDataset } = require('./src/api/get/getDataset');
const { deleteDataset } = require('./src/api/delete/deleteDataset');
const { updateDataset } = require('./src/api/update/updateDataset');
const { getAxios } = require('./src/api/axios/getAxios');
const { observableRTC } = require('./src/observable/observableRTC');
const { chat } = require('./src/chat/chat');


const requestListener = function (req, res) {
  res.writeHead(200);
  res.end('Server start!!!, port '+ port);
}


const server = http.createServer(requestListener);
server.listen(port, () =>{

  let conn = connectionJexia("rtm");
  //createDataset(conn, "Progress_Student", progress_data);
  //getDataset(conn, "Teachers");
  //deleteDataset(conn, "Teachers", "27258ced-609b-41a9-b7e9-7a040d2b82d9");
  //updateDataset(conn, "Students", [{"id_class": "f88be7af-76d5-414c-a04f-e49423e3345d"}], "7f04962f-85af-4586-8c41-9db589dfa582");
  //getAxios("Students");
  //getTeachers(ds, "ejisselgb", temp_pass); // insecury login
  //uploadFiles(conn, "Test Image");
  //observableRTC(conn, "Students");
  //chat(conn, "observable");
   
});


