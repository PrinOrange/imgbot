import minimist from "minimist";
import { ServerSettings } from "./models/settings.model";
import fs from "fs";

export const IMAGES_DIR_NAME: string = "images";
export const SERVER_SETTINGS_FILE_PATH: string = "./server.json";

// Receive arguments from terminal or shell.
const args = minimist(process.argv);

// default server settings.
let default_settings: ServerSettings = {
  port: 3300,
  host: "localhost",
};

// Load settings from file.
fs.readFile(SERVER_SETTINGS_FILE_PATH, "utf-8", function (err, data) {
  if (!err) default_settings = { ...JSON.parse(data) };
});

// Configurations for server from terminal or shell.
export const SERVER_PORT: number = args["port"] ?? default_settings.port;
export const SERVER_HOST: string = args["host"] ?? default_settings.host;