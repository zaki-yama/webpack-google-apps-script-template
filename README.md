Google Apps Script Template
===========================

## Installation

```zsh
$ npm install
# or yarn
```

## Authentication

If you've never installed `gapps` and authenticate it, please read [here](https://github.com/danthareja/node-google-apps-script#quickstart) and download your credentials, then run

```zsh
$ npm run auth -- [path/to/credentials.json]
```

## Usage

```zsh
# Open your GAS(Google Apps Script) file and get fileId.
# (fileId is like https://script.google.com/d/[fileId]/edit)
# Pass it to `init` command.
$ npm run init -- [fileId]

# Bundle scripts under lib/ directory and generate src/bundle.js.
$ npm run build

# Upload src/bundle.js to GAS.
$ npm run upload
```
