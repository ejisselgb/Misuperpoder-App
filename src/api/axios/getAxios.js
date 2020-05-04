//Example getstudent from API url with AXIOS
const { project_url, method, key, secret } = require('../../../config');
const axios = require('axios');

function getAxios(dataset){

    let data = {
        method: method,
        key: key,
        secret: secret
    }
    
    axios.post(project_url+"/auth", data)
    .then((res) => {
        getWithToken(res.data.access_token, dataset);
    })
    .catch((err) => {
      console.log("Error ", err.response.data[0].message, " --- Status ", err.response.status);
    })
}


function getWithToken(access_token, dataset){

    let axiosHeader = {
        headers: {
            Authorization: "Bearer ".concat(access_token),
        }
    };

    axios.get(project_url+"/ds/"+dataset, axiosHeader).then(response => {
        console.log(response.data);
    })
    .catch((error) => {
        console.log('Error' + error);
    });
}

module.exports = {
    getAxios: getAxios
}