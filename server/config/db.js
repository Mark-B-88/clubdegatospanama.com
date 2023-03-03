const dotenv = require("dotenv");
dotenv.config();

const port = process.env.APP_PORT;

module.exports = {
    port
};