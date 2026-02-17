const http = require("http")

const products = 
[
    {
        "id": 1,
        "name": "Apple",
        "price": 1.20
    },
    {
        "id": 2,
        "name": "Banana",
        "price": 0.80
    },
    {
        "id": 3,
        "name": "Orange",
        "price": 1.50
    }
]

const server = http.createServer((req, res) => {
    const method = req.method
    
    switch(method){
        case"GET":
            if(products.length === 0){
                res.statusCode(400)
                res.end("NO products")
                return
            }

            res.statusCode(200)
            res.end(JSON.stringify(products))
    }
})


server.listen(3000, () => console.log("server is running on port 3000"))