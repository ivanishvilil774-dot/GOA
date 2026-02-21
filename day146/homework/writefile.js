const { fstat } = require("node:fs")

const writefile = async (filePath, content) => {
    try{
        await fstat.writefile(filePath, JSON.stringify(content))
        return "data was added successfully"
    }catch (err) {
        console.error('Error writing file:', err)
    }
}


module.exports = writefile