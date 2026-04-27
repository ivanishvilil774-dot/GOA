const http = require("http")

const server = http.createServer((req, res) => {
    const Myurl = new URL(`http://localhost:3000${req.url}`)
    console.log(Myurl)
    console.log(Myurl.hostname)
    console.log(Myurl.pathname)
    console.log(Myurl.searchParams)

    res.end("hello")
})


server.listen(3000, () => console.log("server is running on port 300"))