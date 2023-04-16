const express = require("express");
const app = express();
const cors = require("cors");
const helmet = require("helmet");
const { PORT } = require("./config/db");
const contactRoute = require("./routes/contact");

app.use(express.json());
app.use(cors());
app.use(helmet());

app.use("/api/v1", contactRoute);

app.listen(PORT, () => console.log(`server running on port ${PORT}`));