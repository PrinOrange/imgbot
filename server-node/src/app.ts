import express from "express";
import { useUploadRoute } from "./routes/upload-image";
import colors from "colors";
import { useImages } from "./routes/images";

export const prepareApp = ()=>{

}

export const startApp = (setting: { host: string; port: number; staticImagesDirName: string }) => {
  const app = express();

  useImages(app,setting.staticImagesDirName);
  useUploadRoute(app, setting.host, setting.port, setting.staticImagesDirName);

  app.listen(setting.port, setting.host);

  console.info(colors.green(`Now the server is work on http://${setting.host}:${setting.port}`));
};
