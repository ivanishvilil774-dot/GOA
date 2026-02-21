const fs = require('fs/promises')

const readfile = (file) => {
    try{
        const data = fs.readFileSync(file, 'utf8')
        return JSON.parse(data)
    } catch (err) {
        console.error('Error reading file:', err)
    }
} 

module.exports = readfile