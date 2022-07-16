import express, { Express } from "express";
import colors from "colors";

/* Registry static images routes. */
export const useImages = (app: Express, upload_dir_name: string) => {
  app.use("/images", express.static(`${upload_dir_name}`));
  console.log(colors.green(`The static images route working...`))
};
