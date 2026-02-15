const http = require("http")


const server = http.createServer((req, res) => {
    res.end(req.url)
})

server.listen(3000, () => {
    console.log("server is runing on port 3000")
})