import { prepareApp, startApp } from "./app";
import { loadSettings } from "./setting";

loadSettings()
  .then((settings) => {
    prepareApp().then((app) => {
      startApp(app, settings);
    });
  })
  .catch((err) => {
    console.log(err.message);
  });
