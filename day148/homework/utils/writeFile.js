const fs = require("fs/promises");

const writeFile = async (path, data) => {
    try {
        await fs.writeFile(path, JSON.stringify(data));
    } catch (error) {
        throw new Error("Error writing file: " + error.message);
    }
};

module.exports = writeFile;