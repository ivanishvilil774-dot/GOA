const express = require("express")
const app = express()

app.use((req, res, next) => {
    console.log(req.body)
    console.log(req.method)
    next()
})


app.listen(3000, () => console.log("server is running on port 3000"))