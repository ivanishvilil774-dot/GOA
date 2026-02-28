const express = require("express")

const app = express()

let string = [
    "hello",
    "world",
    "this",
    "is",
    "Luka",
]

app.get("/strings", (req, res) => {
    res.send(string)
})


app.delete("/strings/:id", (req, res) => {
    const id = parseInt(req.params.id)

    string = string.filter((item, index) => {
        return index !== id
    })

    res.status(204).send(string)
})


app.listen(3000, () => {
    console.log("server is running on port 3000")
})