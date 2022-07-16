import { prepareApp, startApp } from "./app";
import { IMAGES_DIR_NAME, SERVER_HOST, SERVER_PORT } from "./setting";

// Prepare App working environment
prepareApp();

// Run App
startApp({
  port: SERVER_PORT,
  host: SERVER_HOST,
  staticImagesDirName: IMAGES_DIR_NAME,
});
