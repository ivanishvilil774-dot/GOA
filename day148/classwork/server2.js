const express = require("express")

const app = express()

const usersRouter = require('../classwork/Routers/users.Route.js')

app.use("/users", usersRouter)

app.listen(3000, () => {
    console.log("server is running on port 3000")
})

