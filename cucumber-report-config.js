const report = require("multiple-cucumber-html-reporter");
const cypressVersion = require("cypress/package.json").version;
const nodeVersion = process.version;
const fs = require("fs");
const os = require("node:os");

function getBrowserDetails() {
  const fileContent = fs.readFileSync("./browserinfo.json", "utf-8");
  return JSON.parse(fileContent);
}

const browserDetails = getBrowserDetails();

report.generate({
  jsonDir: "./cypress/reports/cucumber-json/",
  reportPath: "./cypress/reports/cucumber-report/",
  openReportInBrowser: true,
  displayDuration: true,
  displayReportTime: true,
  metadata: {
    browser: {
      name: browserDetails.displayName || "unknown-browser",
      version: browserDetails.majorVersion || "unknown-version",
    },
    device: os.hostname() || "unknown-device",
    platform: {
      name: os.platform() || "unknown-platform",
      version: os.version() || "unknown-version",
    },
  },
  customData: {
    title: "Run info",
    data: [
      { label: "Project", value: "Orange HRM" },
      { label: "Release", value: "1.0.0" },
      { label: "Node Version", value: nodeVersion },
      { label: "Cypress Version", value: cypressVersion },
    ],
  },
});