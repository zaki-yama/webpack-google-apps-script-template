Google Apps Script Template
===========================

## Installation

```zsh
$ npm install
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
