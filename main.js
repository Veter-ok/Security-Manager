const path = require('path');
const url = require('url');
const ejs = require('ejs')
const {app, BrowserWindow} = require('electron');

let win;

function createWindow() 
{
    win = new BrowserWindow({
        width: 550, 
        height: 500, 
        icon: __dirname + 'img/icon.png'
    });

    win.loadURL(url.format({
        pathname: path.join(__dirname, 'generate.html'),
        protocol: 'file:',
        slashes: true
    }));

    //win.webContents.openDevTools();

    win.on('closed', () => {
        win = null;
    });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
    app.quit();
});