const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    method: process.env.METHOD,
    key: process.env.API_KEY,
    secret: process.env.API_SECRET,
    project_id: process.env.PROJECT_ID,
    project_url: process.env.PROJECT_URL,
    port: process.env.PORT,
    temp_pass: process.env.TEMP_PASS
};