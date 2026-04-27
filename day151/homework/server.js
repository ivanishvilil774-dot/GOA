require("dotenv").config();

const express = require("express");
const errorHandler = require("errorhandler");

const app = express();

app.get("/", (req, res) => {
    res.send(process.env.APP_NAME);
});

app.get("/error", (req, res) => {
    throw new Error("This is an error");
});

app.use((req,res, next) => {
    res.status(404).send("not found eror 404");
    next()
}) 

if (process.env.NODE_ENV !== "production") {
    app.use(errorHandler());
}

app.listen(process.env.PORT, () => {
    console.log(`${process.env.APP_NAME} is running on port ${process.env.PORT}`);
});