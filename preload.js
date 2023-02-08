// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.
const pkg = require('./package.json');
const os = require('node:os');

window.addEventListener('DOMContentLoaded', () => {
  const replaceText = (selector, text) => {
    const element = document.getElementById(selector);
    if (element) element.innerText = text;
  };

  replaceText(`app-version`, pkg.version);
  replaceText(`platform`, os.platform);
});
