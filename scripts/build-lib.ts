import { rimrafSync } from "rimraf";
import { execute, getVersion, logStep } from "./utils";

;(function main() {
  nukeLib();
  buildLib();
})();

function nukeLib() {
  logStep("Nuking lib/");
  rimrafSync("lib");
}

function buildLib() {
  logStep(`Building ${getVersion()}`);
  execute("npx tsc -p ./tsconfig.build.json");
}
