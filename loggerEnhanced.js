const EventEmitter = require('events');

class Logger extends EventEmitter {
    log(message) {
        console.log(message);

        // raise an event
        const eventArgs = {id: '1', data: 'Argument body'};
        this.emit('messageLogged', eventArgs);
    }
}

// make the log method public
// export Logger class
module.exports = Logger;