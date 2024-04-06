function hello(name) {
    console.log("Hello " + name);
}

// hello('Cuong');
// console.log(module);

// get logger as an object
// const logger = require('./logger');
// logger.log('Message');

// get log method
const log = require('./logger.js');
log('Message');

// get Logger object
const Logger = require('./loggerEnhanced.js');
const logger = new Logger();

// register listener from Logger obj
logger.addListener('messageLogged', (args) => {
    console.log("Listen to messageLogged event from Logger class with args,", args);
})

logger.log('Logger message');