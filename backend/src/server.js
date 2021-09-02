const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());

const connect = require("./Config/db");

const libraryController = require("./Controller/library.controller");
app.use("/library", libraryController);

app.listen(5000, async () => {
  await connect();
  console.log("Server is running on port 5000...");
});
