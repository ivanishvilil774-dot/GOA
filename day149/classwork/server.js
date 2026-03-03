const express = require("express")
const usersRouter = require("./routers/users.route")

const app = express()
app.use("/users", usersRouter)

app.listen(3000, () => console.log("server is running on port 3000"))