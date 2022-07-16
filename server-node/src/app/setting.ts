import minimist from "minimist";
import { ServerSettings } from "./models/settings.model";
import fs from "fs";

export const IMAGES_DIR_NAME: string = "images";
export const SERVER_SETTINGS_FILE_PATH: string = "./server.json";

// Receive arguments from terminal or shell.
const args = minimist(process.argv);

// Load settings from file.
const loadSettings = () => {
  const result = {
    port: 3300,
    host: "localhost",
  };
  fs.readFile(SERVER_SETTINGS_FILE_PATH, "utf-8", function (err, data) {
    if (!err) Object.assign(result, JSON.parse(data));
  });
  return result;
};

//TODO:放弃命令行传参，改用配置文件传参。

// default server settings.
const DEFAULT_SETTINGS: ServerSettings = loadSettings();

// Configurations for server from terminal or shell.
export const SERVER_PORT: number = args["port"] ?? DEFAULT_SETTINGS.port;
export const SERVER_HOST: string = args["host"] ?? DEFAULT_SETTINGS.host;
