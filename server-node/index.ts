import colors from "colors";
import express from "express";
import formidable, { File as FormFile } from "formidable";
import fs from "fs";
import minimist from "minimist";
import { ServerSettings } from "./src/models/settings.model";
import { v4 as uuid4 } from "uuid";
import { UploadResponse } from "./src/models/response.model";

const IMAGES_DIR_NAME: string = "images";
const SERVER_SETTINGS_FILE_PATH: string = "./server.json";

// Receive arguments from terminal or shell.
const args = minimist(process.argv);

// default server settings.
let settings: ServerSettings = {
  port: 3300,
  host: "localhost",
};

// Load settings from file.
fs.readFile(SERVER_SETTINGS_FILE_PATH, "utf-8", function (err, data) {
  if (!err) settings = { ...JSON.parse(data) };
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
  let currentFilename: string;
  let currentFileId: string;

  const form = formidable({
    multiples: true,
    uploadDir: IMAGES_DIR_NAME,
    keepExtensions: true,
    filename: (name, ext) => {
      currentFileId = uuid4();
      currentFilename = `${currentFileId}${ext}`;
      return currentFilename;
    },
  });

  form.on("file", (formname, file) => {
    form.emit("data", { name: "file", formname, value: file });
  });

  form.parse(req, (err, fields, files) => {
    res.header("Access-Control-Allow-Origin", "*");
    let response: UploadResponse = {
      status: "ok",
    };
    if (err) {
      response.status = "err";
      response.message = err;
      res.json(response);
    }    
    if (files["upload_image"] === undefined) {
      response.status = "err";
      response.message = "You must upload a file with the name of 'upload_image'.";
      res.json(response);
    }
    console.log((files["upload_image"] as FormFile).size);
    response.id = currentFileId;
    response.url = `http://${SERVER_HOST}:${SERVER_PORT}/${IMAGES_DIR_NAME}/${currentFilename}`;
    res.json(response);
  });
});

console.info(colors.green("The server is running."));
console.info(colors.green(`Now the server is work on http://${SERVER_HOST}:${SERVER_PORT}`));