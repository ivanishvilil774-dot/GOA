const express = require("express")

const usersRouter = express.Router()

const users = [
    {
        id: 1,
        name: "Luka",
        age: 20,
    },
    {
        id: 2,
        name: "John",
        age: 25,
    },
    {
        id: 3,
        name: "Jane",
        age: 30,
    },
]

usersRouter.get("/", (req, res) => {
    res.json(users)
})

usersRouter.get("/:id", (req, res) => {
    const id = parseInt(req.params.id)
    const user = users.find((user) => user.id === id)
    res.json(user)
})

module.exports = usersRouter