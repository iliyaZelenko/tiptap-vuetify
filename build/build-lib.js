"use strict";
const shell = require("shelljs");

shell.rm("-rf", "es5", "lib", "lib-temp");
shell.exec("yarn run tsc -p tsconfig.dist.json");
shell.exec(
  "yarn run cross-env NODE_ENV=lib babel lib-temp --out-dir lib --source-maps"
);
