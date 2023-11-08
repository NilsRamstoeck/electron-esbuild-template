"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var path = __toESM(require("path"));
var import_electron = require("electron");
const i18n = {
  t(s) {
    return s;
  }
};
function createMenu() {
  const menu = new import_electron.Menu();
  menu.append(new import_electron.MenuItem({
    label: i18n.t("Dev"),
    submenu: [
      {
        label: i18n.t("Toggle Developer Tools"),
        accelerator: "ctrl+shift+i",
        click: () => {
          import_electron.BrowserWindow.getFocusedWindow().webContents.toggleDevTools();
        }
      },
      {
        label: i18n.t("Reload"),
        accelerator: "f5",
        click: () => {
          import_electron.BrowserWindow.getFocusedWindow().reload();
        }
      },
      {
        label: i18n.t("Exit"),
        accelerator: "esc",
        click: () => {
          import_electron.app.quit();
        }
      }
    ]
  }));
  return menu;
}
function createWindow() {
  const width = 1300;
  const height = 700;
  const mainWindow = new import_electron.BrowserWindow({
    width,
    height,
    minWidth: width,
    minHeight: height,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      nodeIntegration: true
    }
  });
  mainWindow.loadFile(path.join(__dirname, "index.html"));
  mainWindow.webContents.openDevTools();
  return mainWindow;
}
import_electron.app.whenReady().then(async () => {
  import_electron.Menu.setApplicationMenu(createMenu());
  createWindow();
});
import_electron.app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    import_electron.app.quit();
  }
});
