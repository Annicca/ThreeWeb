const express = require("express");
const bodyParser = require("body-parser");
// const pgService = require("./services/pgService");
const pgDb = require("./db");

const port = 6000;
const app = express();
app.use(bodyParser.json());

app.use(express.json());
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
