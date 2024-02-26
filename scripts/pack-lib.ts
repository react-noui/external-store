import { execute, getPackageVersion, getVersion, logStep } from "./utils";

;(function main() {
  packLib();
  displayTarballFilename();
})();

function packLib() {
  logStep(`Packing tarball for ${getVersion()}`);
  execute("npm pack");
}

function displayTarballFilename() {
  logStep("Tarball created!\n");
  console.log(`\treact-noui-external-store-${getPackageVersion()}.tgz\n\n`);
}
