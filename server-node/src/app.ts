import express from "express";

export const IMAGES_DIR_NAME: string = "images";
export const SERVER_SETTINGS_FILE_PATH: string = "./server.json";

export const app = express();
app.use("/images", express.static(`${IMAGES_DIR_NAME}`));

