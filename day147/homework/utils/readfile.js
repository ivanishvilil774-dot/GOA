const fs = require('fs/promises');

const ReadFile = async (file) => {
    try{
        const data = await fs.readFile(file, "utf-8")
        return JSON.parse(data);
    } catch (error) {
        console.error("Error reading file:", error);
    }
}

module.exports = ReadFile;