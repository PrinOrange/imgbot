import express from "express";
import minimist from "minimist";
import fs from "fs";
import path from "path";

// Receive arguments from terminal and shell.
const args = minimist(process.argv);

// Configurations for server.
const SERVER_PORT: number = args["server-port"] ?? 3300;
const SERVER_HOST: string = args["server-host"] ?? "localhost";


const app = express();

// Registry the static image data directory.
app.use("/images", express.static("images"));

app.get("/data/?*", (req, res) => {
  res.status(400).send("Bad Request");
});

app.listen(SERVER_PORT, SERVER_HOST);
