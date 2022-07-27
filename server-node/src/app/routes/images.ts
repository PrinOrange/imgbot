import express, { Express } from "express";
import colors from "colors";

/* Registry static images route. */
export const useImages = (app: Express) => {
  app.use("/images", express.static('images'));
  console.log(colors.green(`The static images route working...`))
};
