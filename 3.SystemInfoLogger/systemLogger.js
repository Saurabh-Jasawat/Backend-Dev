const os = require("os");
const fs = require("fs");

setInterval(() => {
  const info = `
CPU: ${os.cpus()[0].model}
Memory: ${os.totalmem()}
Platform: ${os.platform()}
-----------------------
`;

  fs.appendFile("systemInfo.txt", info, (err) => {
    if (err) {
      console.log("Error writing system info");
    } else {
      console.log("System info logged");
    }
  });
}, 5000);
