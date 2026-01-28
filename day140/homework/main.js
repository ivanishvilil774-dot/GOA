
// const event = require("events")

// const EventEmitter = new event.EventEmitter()

// EventEmitter.on("hello", (message) => {
//     console.log("your message: ", message)
// })

// EventEmitter.emit("hello", [1233])

// // 2 


// const event2 = new event.EventEmitter()

// event2.on("hello", (message) => {
//     console.log(message)
// })

// process.stdin.on("data", (input) => {
//     event2.emit("hello", input.toString())
// })

// // 3 

// process.stdin.on("data", (input) => {
//     process.stdout.write(input)
// })


// // 4 

// process.stdin.on("data", (userInput) => {
//     let input = userInput
//     process.stdout.write("You typed: " + input)
// })



// // 5 


// const {Buffer} = require('buffer')
// const { userInfo } = require("os")

// const buf1 = Buffer.alloc(5)

// console.log(buf1)


// // 6 

// process.stdin.on("data", (usetINput) => {
//     const str = usetINput.toString().trim()
//     const buf2 = Buffer.from(str)

//     console.log(buf2)
//     console.log(str)
// })


// 7 

process.stdin.on("data", (usersInput) => {
    const str = Buffer.from(usersInput).toString()

    console.log(str)
})


// 8 

const buf = Buffer.from("hello")


console.log("Before change:", buf);  
console.log("Before change (text):", buf.toString()); 