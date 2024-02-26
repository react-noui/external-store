import { mkdirSync } from "fs";
import { execute, getVersion, logStep } from "./utils";
import { rimrafSync } from "rimraf";

;(async function main() {
  nukeDocs();
  buildMarkdownDocs();
  buildHTMLDocs()
})();

function nukeDocs() {
  logStep("Nuking docs/");
  rimrafSync("docs");
}

function buildMarkdownDocs() {
  logStep(`Build markdown docs for ${getVersion()}`);
  return execute("npx typedoc --plugin typedoc-plugin-markdown src/index.ts --out docs/markdown");
}

function buildHTMLDocs() {
  logStep(`Build html docs for ${getVersion()}`);
  return execute("npx typedoc src/index.ts --out docs/html");
}