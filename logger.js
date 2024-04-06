var url = 'http://mylogger.com';

function log (message) {
    console.log(message);
}

console.log(`File name: ${__filename}`);
console.log(`Dir name: ${__dirname}`);

// make the log method public
// export it as an object has log property is a method
// module.exports.log = log;

// export it as a method only
module.exports = log;