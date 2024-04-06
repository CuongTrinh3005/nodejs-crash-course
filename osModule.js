const os = require('os');

const totalMemory = os.totalmem();
const freeMemory = os.freemem();

console.log(`Total Memory is ${totalMemory} bytes`);
console.log(`Free Memory is ${freeMemory} bytes`);