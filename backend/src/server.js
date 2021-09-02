const express = require("express");
const app = express();
app.use(express.json());

const connect = require("./Config/db");

app.listen(5000, async () => {
  await connect();
  console.log("Server is running on port 5000...");
});
