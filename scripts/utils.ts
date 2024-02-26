import chalk from "chalk";
import { execSync } from "child_process";
import { readFileSync } from "fs";

export const PACKAGE_NAME = chalk.underline(chalk.green("@react-noui/external-store"));

export const execute = (script: string) => {
  console.log(chalk.gray("↳"), script, "\n");
  try {
    return execSync(script);
  } catch(err: unknown) {
    logError("Error:", err);
  }
};

export function logError(message: string, stderr: any) {
  console.error([
    "",
    chalk.red(message),
    `\t${chalk.red(stderr)}`,
  ].join("\n"));
}

export const logStep = (message: string) =>
  console.log(["", chalk.gray("Step: ") + message].join("\n"));


export const logCommand = (message: string) =>
  console.log(["", chalk.gray("Step: ") + message].join("\n"));

export function getVersion(): string {
  return chalk.underline(`${PACKAGE_NAME}@${chalk.green(getPackageVersion())}`);
}

export function getPackageVersion(): string {
  return JSON.parse(readFileSync("./package.json", "utf8")).version;
}
