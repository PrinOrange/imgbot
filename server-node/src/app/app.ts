import colors from 'colors';
import express from 'express';
import fs from 'fs';
import fsp from 'fs/promises';
import { ServerSettings } from './models/settings.model';
import { useImages } from './routes/images';
import { useUploadRoute } from './routes/upload-image';

export const prepareApp = () => {
  if (!fs.existsSync("./images")) {
    fsp.mkdir("./images").catch((err) => console.log(err.message));
  }
};

export const startApp = (setting: ServerSettings) => {
  const app = express();
  useImages(app);
  useUploadRoute(app, setting.host, setting.port);
  app.listen(setting.port, setting.host)
  console.info(colors.green(`Now the server is work on ${setting.host}:${setting.port}`));
  return app;
};
