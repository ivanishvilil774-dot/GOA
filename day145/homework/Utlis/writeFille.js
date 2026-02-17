const fs  = require("fs/promises")

const writeFile = async (file, data) => {
    try{
        await fs.writeFile(file, JSON.stringify(data))
        return "data added successfulu"
    }catch(e){
        return {error: e}
    }
}

module.exports = {writeFile}