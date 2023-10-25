# ICE-Portal-App

A webview App powered by [Electron](https://www.electronjs.org/), forked from [Electron webview](https://github.com/cba85/electron-webview) - displays the ICE-Portal from Deutsche Bahn (DB) that is available when traveling via ICE.

This Electron webview application needs just these files:

## Get started

This repository requires node.js and npm (and nvm, if you like easy version switching of versions of it).


```bash
# Switch to correct node/npm version
$ nvm use
# Install dependencies
$ npm install
# Run the app in dev mode
$ npm run dev
```

## Build MacOS, Windows and Linux package

If you want to pack the app, run one of these commands to package mac, windows or linux app.

```bash
$ npm run package-mac
```

```bash
$ npm run package-win
```

```bash
$ npm run package-linux
```

## Mac installer

If you want to create a DMG installer for Mac, please use the [electron-installer-dmg](https://github.com/mongodb-js/electron-installer-dmg) package via the following command

```bash
$ npm run create-installer-mac
```

## Source

Based on:

- [Electron webview](https://github.com/cba85/electron-webview)

## License

[MIT](LICENSE.md)
