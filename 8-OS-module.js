const os = require("os");

// info about current user
const user = os.userInfo();
console.log(user);

// method returns the system uptime in secods
console.log(`The System Uptime is ${os.uptime()} seconds`);

const currentOs = {
  name: os.type(),
  release: os.release(),
  totalMemory: os.totalmem(),
  freeMem: os.freemem(),
};

console.log(currentOs);