import express, { Express } from "express";
export const useImages = (app: Express, upload_dir_name: string) => {
  app.use("/images", express.static(`${upload_dir_name}`));
};
