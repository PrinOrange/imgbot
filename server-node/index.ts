import colors from "colors";
import express from "express";
import fs from "fs";
import minimist from "minimist";
import formidable from "formidable";
import { ServerSettings } from "./src/models/settings.model";
import { v4 as uuid4 } from "uuid";

const IMAGES_DIR_NAME: string = "images";
const SERVER_SETTINGS_FILE: string = "./server.json";

// Receive arguments from terminal or shell.
const args = minimist(process.argv);

// default server settings.
let settings: ServerSettings = {
  port: 3300,
  host: "localhost",
};

// Load settings from file.
fs.readFile(SERVER_SETTINGS_FILE, "utf-8", function (err, data) {
  settings = { ...JSON.parse(data) };
});

// Configurations for server from terminal or shell.
const SERVER_PORT: number = args["port"] ?? settings.port;
const SERVER_HOST: string = args["host"] ?? settings.host;

// Registry the static image data directory.
const app = express();
app.use("/images", express.static(`${IMAGES_DIR_NAME}`));

console.log(colors.cyan(`Listening the port ${SERVER_PORT}`));
app.listen(SERVER_PORT, SERVER_HOST);

// Upload image URL interface
app.post("/upload-image", (req, res) => {
  let currentFilename = "";
  const form = formidable({
    multiples: true,
    uploadDir: IMAGES_DIR_NAME,
    keepExtensions: true,
    filename: (name, ext) => {
      currentFilename = `${uuid4()}${ext}`;
      return currentFilename;
    },
  });
  form.parse(req, (err, fields, files) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.json({ name: currentFilename });
  });
});

console.info(colors.green("The server is running."));
console.info(`Now the server is work on http://${SERVER_HOST}:${SERVER_PORT}`);