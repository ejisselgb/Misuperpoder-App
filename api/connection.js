const { jexiaClient, dataOperations } = require("jexia-sdk-js/node"); 
const {key, secret, project_id } = require('../config');

const ds = dataOperations();

jexiaClient().init({
    projectID: project_id,
    key: key,
    secret: secret,
  }, ds);

module.exports = {
    ds: ds
}