var fs = require("fs");

const VERSION = process.env.npm_package_version;

const PackageTemplate = {
  name: "imgbot",
  version: VERSION,
  description: "IMGBOT - A Image-server software implemented with nodejs.",
  scripts: {
    start: "node ./index.js",
  },
};

fs.writeFile("./build/package.json", JSON.stringify(PackageTemplate,null, 2), (err) => {
  if (err) {
    console.error(err);
    return;
  }
});
