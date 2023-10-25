// Electron
const { app } = require("electron");

app.whenReady().then(() => {
  // Main window
  const window = require("./src/window");
  mainWindow = window.createBrowserWindow(app);
  mainWindow.loadURL("https://iceportal.de/");
});

// Quit when all windows are closed.
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
