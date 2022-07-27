import colors from "colors";
import express, { Express } from "express";
import fs from "fs";
import fsp from "fs/promises";
import { ServerSettings } from "./models/settings.model";
import { useDelete } from "./routes/delete";
import { useImages } from "./routes/images";
import { useUploadRoute } from "./routes/upload-image";

export const prepareApp = async () => {
  return new Promise<Express>((resolve, reject) => {
    const app = express();
    app.use(express.json());

    app.all("*", function (req, res, next) {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "Content-Type");
      res.header("Access-Control-Allow-Methods", "*");
      next();
    });

    if (!fs.existsSync("./images")) {
      fsp.mkdir("./images").catch((err) => reject(err.message));
    }
    resolve(app);
  });
};

export const startApp = (app:Express,setting: ServerSettings) => {

  useImages(app);
  useUploadRoute(app, setting.host, setting.port);
  useDelete(app);

  app.listen(setting.port, setting.host);

  console.info(colors.green(`Now the server is work on ${setting.host}:${setting.port}`));
  return app;
};
