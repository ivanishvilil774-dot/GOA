const fs = require("fs/promises")

const readFile = async (file) => {
    try {
        const data = await fs.readFile(file, "utf8")
        console.log(JSON.parse(data))
    } catch (err) {
        console.log(err)
    }
}

readFile("books.json")
