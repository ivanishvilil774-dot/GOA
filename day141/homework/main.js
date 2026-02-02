const { readFile } = require("fs/promises")
const fs = require("fs")

const data = async () => {
    const info = await readFile("./text.txt", "utf-8")
    console.log(info)
}

data()

const readjson = async () => {
    const info = await readFile("./info.json", "utf-8")
    console.log(JSON.parse(info))
}

readjson()


const readData = async () => {
    const info = await readFile("./text2.txt", "utf-8")
    console.log(info.split("\n"))
}

readData()

process.stdin.on("data", userinput => {
    let input = userinput.toString()
    const writingStream = fs.createWriteStream("output.txt")
    writingStream.write(input)
})


