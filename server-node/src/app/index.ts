import { prepareApp, startApp } from "./app";
import { loadSettings } from "./setting";

loadSettings()
  .then((settings) => {
    prepareApp();
    startApp(settings);
  })
  .catch((err) => {
    console.log(err.message);
  });
