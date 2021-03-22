const {ipcRenderer} = require('electron');

// Does not produce an error:
// var policy = {
//   createHTML: function(s) {
//     return s;
//   }
// };

// Produces an error:
var policy = window.trustedTypes.createPolicy('policy', {
  createHTML: function(s) {
    return s;
  }
});

// This receives an event from main.js (the NodeJS process) every second.
ipcRenderer.on('ping', (event, data) => {
  // Set a breakpoint here
  console.log(policy.createHTML('test'));
});
