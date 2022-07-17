import { ServerSettings } from "./models/settings.model";
import fs from "fs/promises";

export const loadSettings = async (): Promise<ServerSettings> => {
  const default_settings: ServerSettings = {
    port: 3300,
    host: "localhost",
  };
  const loaded_settings = await fs.readFile("./server.json", "utf-8");
  return { ...default_settings, ...JSON.parse(loaded_settings) };
};
