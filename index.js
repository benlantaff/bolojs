// Modules to control application life and create native browser window
const { app, BrowserWindow, ipcMain, screen } = require('electron');
const path = require('path');
const updater = require('./updater');

const environment = 'development';
//const environment = "production";

const createWindow = () => {
  //
  const primaryDisplay = screen.getPrimaryDisplay();
  //Create the browser window.
  mainWindow = new BrowserWindow({
    // width: primaryDisplay.size.width / 2 - 600,
    // height: primaryDisplay.size.height / 2 - 400,
    width: 400,
    height: 330,
    resizable: false,
    //movable: true,
    // minHeight: primaryDisplay.size.height / 2 + 200,
    // minWidth: primaryDisplay.size.width / 2 + 200,
    // fullscreen: true,
    show: false,
    webSecurity: false,
    frame: false,
    icon: __dirname + '/icon.png',
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      enableRemoteModule: true,
      preload: path.join(__dirname, 'preload.js'),
    },
  });

  // Create the updates window.
  updateWindow = new BrowserWindow({
    width: 500,
    height: 225,
    frame: false,
    resizable: false,
    icon: __dirname + '/icon.png',
    webPreferences: {
      nodeIntegration: true,
      parent: mainWindow,
    },
  });

  // Practice
  practiceWindow = new BrowserWindow({
    width: primaryDisplay.size.width / 2 + 200,
    height: primaryDisplay.size.height / 2 + 200,
    resizable: false,
    //movable: true,
    // minHeight: primaryDisplay.size.height / 2 + 200,
    // minWidth: primaryDisplay.size.width / 2 + 200,
    // fullscreen: true,
    show: false,
    webSecurity: false,
    frame: false,
    icon: __dirname + '/icon.png',
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      enableRemoteModule: true,
      preload: path.join(__dirname, 'preload.js'),
    },
  });

  // Load the start page
  mainWindow.loadFile('index.html');

  updateWindow.loadFile('updates.html');
  updateWindow.setHasShadow = true;
  //mainWindow.setHasShadow = true;
  // practiceWindow.setHasShadow = true;
  //mainWindow.webContents.openDevTools();
  // updateWindow.webContents.openDevTools();

  //ONLY FOR TESTING
  if (environment === 'development') {
    updateWindow.close();
    mainWindow.show();
  } else if (environment === 'production') {
    //FOR PRODUCTION
    updater(updateWindow, mainWindow);
  }
};

// IPC messaging
ipcMain.on('practice', async (e, data) => {
  practiceWindow.loadFile('practice.html');
  practiceWindow.show();
  mainWindow.close();
});

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
