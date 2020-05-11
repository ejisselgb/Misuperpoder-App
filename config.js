const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    method: process.env.METHOD,
    key: process.env.KEY,
    secret: process.env.SECRET,
    project_id: process.env.PROJECT_ID,
    project_url: process.env.PROJECT_URL,
    port: process.env.PORT,
    temp_pass: process.env.TEMP_PASS
};