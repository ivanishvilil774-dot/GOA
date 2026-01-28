const event = require("events");
const { Buffer } = require("buffer")


const myEmitter = new event.EventEmitter();

const listener = (data) => {
    console.log(data)
}

myEmitter.on("welcome", listener)

myEmitter.emit("welcome", [1,3,2,4,3,3,3])


const myNameBuffer = Buffer.from("luka")


process.stdin.on("data", (inputBuffer) => {
    const combienBuffer = Buffer.concat([inputBuffer, myNameBuffer])

    const toSting = combienBuffer.toString()


    process.stdout.write(toSting)
})