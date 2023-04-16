const dotenv = require("dotenv");
dotenv.config();

const PORT = process.env.PORT;
const EMAIL = process.env.EMAIL;
const PASSWORD = process.env.PASSWORD;
const HOST = process.env.HOST;

module.exports = { PORT, EMAIL, PASSWORD, HOST };