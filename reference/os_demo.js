const os = require('os');

// Platform (gets the platform the OS is based on)
console.log(os.platform());


// CPU Arch
console.log(os.arch());


// CPU Core Info
console.log(os.cpus());


// Free memory
console.log(os.freemem());


// Total memory
console.log(os.totalmem());

// Home dir
console.log(os.homedir());

// Uptime (amount of time system has been up -- in seconds)
console.log(os.uptime());
