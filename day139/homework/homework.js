const os = require('os')


console.log("Platform: ", process.platform)
process.argv.forEach((arg, index) => {
    console.log(`argv ${index}:`, arg)
});

console.log(os.type())
console.log(os.release())

console.log(os.totalmem())
console.log(os.freemem())
console.log(os.uptime())

console.log("Normal message");
console.warn("Warning message");
console.error("Error message");

console.table([
    { name: "CPU", value: os.cpus().length },
    { name: "Platform", value: process.platform },
    { name: "HomeDir", value: os.homedir() }
]);