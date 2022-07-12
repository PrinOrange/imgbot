import formidable, { File as FormFile } from "formidable";
import { v4 as uuid4 } from "uuid";
import { app } from "../app";
import { UploadResponse } from "../models/response.model";
import colors from "colors";

export const useUploadRoute = (host:string,port:number,upload_dir_name:string) => {

  // Upload image URL interface
  app.post("/upload-image", (req, res) => {
    let currentFilename: string;
    let currentFileId: string;

    const form = formidable({
      multiples: true,
      uploadDir: upload_dir_name,
      keepExtensions: true,
      filename: (name, ext) => {
        currentFileId = uuid4();
        currentFilename = `${currentFileId}${ext}`;
        return currentFilename;
      },
    });

    form.on("file", (formname, file) => {
      form.emit("data", { name: "file", formname, value: file });
    });

    form.parse(req, (err, fields, files) => {
      res.header("Access-Control-Allow-Origin", "*");
      let response: UploadResponse = {
        status: "ok",
      };
      if (err) {
        response.status = "err";
        response.message = err;
        res.json(response);
      }
      if (files["upload_image"] === undefined) {
        response.status = "err";
        response.message = "You must upload a file with the name of 'upload_image'.";
        res.json(response);
      }
      console.log((files["upload_image"] as FormFile).size);
      response.id = currentFileId;
      response.url = `http://${host}:${port}/${upload_dir_name}/${currentFilename}`;
      res.json(response);
    });
  });

  console.log(colors.green("Upload route is working..."))
};
