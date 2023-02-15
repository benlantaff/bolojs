const { ipcRenderer } = require('electron');

window.addEventListener('DOMContentLoaded', () => {
  const practiceButton = document.getElementById('practice');

  practiceButton.addEventListener('click', (e) => {
    console.log('i clicked the practice button');
    ipcRenderer.send('practice');
  });
});

// ipcRenderer.on('world', (event, msg) => {
//   console.log('received from ipcRenderer: ' + msg);
// });
