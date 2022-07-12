import express from "express";

export const IMAGES_DIR_NAME: string = "images";
export const SERVER_SETTINGS_FILE_PATH: string = "./server.json";

export const app = express();

export const startApp = (props: { host: string; port: number; upload_dir_name: string }) => {
    
  app.listen(props.port, props.host);
  app.use("/images", express.static(`${props.upload_dir_name}`));
};
