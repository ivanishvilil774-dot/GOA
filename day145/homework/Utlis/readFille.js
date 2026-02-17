const fs = require("fs/promises")

const readFile = async (file) => {
    try{
        const data = await fs.readFile(file, "utf-8")
        return JSON.parse(data)
    }catch(e){
        return {error: e}
    }
}

module.exports = {readFile}