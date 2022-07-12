import express from "express";
import { useUploadRoute } from "./routes/upload-image";
import colors from "colors";
import { useImages } from "./routes/images";

export const startApp = (props: { host: string; port: number; upload_dir_name: string }) => {
  const app = express();

  useImages(app,props.upload_dir_name);
  useUploadRoute(app, props.host, props.port, props.upload_dir_name);

  app.listen(props.port, props.host);
  console.info(colors.green("The server is running."));
  console.info(colors.green(`Now the server is work on http://${props.host}:${props.port}`));
};
