import colors from "colors";
import fs from "fs";
import minimist from "minimist";
import {  startApp } from "./app";
import { ServerSettings } from "./models/settings.model";
import { useUploadRoute } from "./routes/upload-image";

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

startApp({
  port: SERVER_PORT,
  host: SERVER_HOST,
  upload_dir_name: IMAGES_DIR_NAME,
});


