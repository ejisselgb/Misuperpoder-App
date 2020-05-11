const { jexiaClient, dataOperations, fileOperations, realTime } = require("jexia-sdk-js/node"); 
const {key, secret, project_id } = require('../config');

function connectionJexia(type){

  let responseConnection;
  const ds = dataOperations();
  const credentials = {  
    projectID: project_id,
    key: key,
    secret: secret,
  };

  if(type === "jfs"){

    const jfs = fileOperations({
      uploadWaitForCompleted: true    
    });
    
    jexiaClient().init(credentials, jfs, realTime());

    responseConnection = jfs;

  }else if(type === "ds"){

    jexiaClient().init(credentials, ds);

    responseConnection = ds;

  }else if(type === "rtc"){

    const rtc = realTime(); 

    jexiaClient().init(credentials, ds, rtc); 

    responseConnection = ds;

  }
  else if(type === "rtm"){

    const rtm = realTime(); 

    jexiaClient().init(credentials, rtm); 

    responseConnection = rtm;

  }

  return responseConnection;
}

module.exports = {
    connectionJexia: connectionJexia
}