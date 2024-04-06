const fs = require('fs');

fs.readdir('./', (err, files) => {
    if(err) console.log('Error', err);
    else console.log('Files:', files);
});
