const http = require('http');

const serever = http.createServer((req, res) => {
    res.end("luka ivanishvili")
})

serever.listen(3000, () => {
    console.log('Server is running on port 3000');
});