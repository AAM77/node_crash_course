
// IMPORTS
const EventEmitter = require('events');
const uuid = require('uuid');
const fs = require('fs');
const path = require('path');




class Logger extends EventEmitter {
  log(msg) {
    // Call event
    let currentDate = new Date();
    let dateTimeStamp = currentDate.toISOString().replace(/T/, ' ').replace(/Z.*/, '');
    let onlyDate = currentDate.toISOString().replace(/T.*/, '');

    // If the file exists, append to it
    if (fs.existsSync(`./logs/log-${onlyDate}.txt`)) {

      fs.appendFile(path.join(__dirname, '/logs', `log-${onlyDate}.txt`),
      `\n${msg} -- ${dateTimeStamp}`,
      err => {
        if(err) throw err;
        console.log('Append successful')
        }
      )

    // else Create a new file & write to it
    } else {

      fs.writeFile(path.join(__dirname, '/logs', `log-${onlyDate}.txt`),
      `LOG MESSAGES \n ${onlyDate}\n\n\n${msg} -- ${dateTimeStamp}`,
      err => {
        if(err) throw err;
        console.log('File created & written to...');
        }
      )
    }

    this.emit('message', { id: uuid.v4(), msg: msg });
  }
}


module.exports = Logger;
