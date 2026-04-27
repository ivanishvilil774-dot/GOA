const http = require('http')

const port = 5000

const server = http.createServer((req, res) => {
    const {method} = req

    if(method === "GET"){
        return res.end("Get request")
    }
    else if(method === "POST"){
        return res.end("Post request")
    }
    else if(method === "PUT"){
        return res.end("Put request")
    }
    else if(method === "DELETE"){
        return res.end("Delete request")
    }
    else{
        return res.end("Method not supported by server")
    }
})


server.listen(`${port}`, console.log(`server is runing on port ${port}`))



