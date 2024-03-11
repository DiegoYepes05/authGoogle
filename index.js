const express = require("express");

const bodyParser = require("body-parser");

require("dotenv").config();

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", require("./src/router/auth"));


app.listen(process.env.PORT || 3000, () => {
  const port = process.env.PORT || 3000;
  console.log(`Servidor corriendo en el pouerto ${port}`);
});
