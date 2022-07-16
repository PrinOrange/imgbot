let fs = require("fs");
let path = require("path");
let colors = require("colors");

function removeDir(p) {
  try {
    let statObj = fs.statSync(p);
    if (statObj.isDirectory()) {
      let dirs = fs.readdirSync(p);
      dirs = dirs.map((dir) => path.join(p, dir));
      for (let i = 0; i < dirs.length; i++) {
        removeDir(dirs[i]);
      }
      fs.rmdirSync(p);
    } else {
      fs.unlinkSync(p);
    }
  } catch (e) {
    console.log(e.message.red);
  }
}
removeDir("./build");
console.log("Finish...");
