// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.
const appVersion = require("electron").remote.app.getVersion();

console.log("preload");

window.addEventListener("DOMContentLoaded", () => {
  const replaceText = (selector, text) => {
    const element = document.getElementById(selector);
    if (element) element.innerText = text;
  };

  console.log(appVersion);
  replaceText(`app-version`, appVersion);
});
