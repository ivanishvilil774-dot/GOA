const { readFile } = require("fs/promises")
const fs = require("fs")

const getData = async (fileURL, encoding) => {
    try {
        const info = await readFile(fileURL, encoding)
        console.log(info)
    } catch (err) {
        console.log(err)
    }
}

getData("./text.txt", "utf-8")

const writingStream = fs.createWriteStream("output.txt")
writingStream.write("hello world on first line\n")
writingStream.write("hello world on second line\n")