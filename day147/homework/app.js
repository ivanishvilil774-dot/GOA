const express = require('express');
const app = express();
const port = 3000;
const DB = "data/books.json";
const ReadFile = require('./utils/readfile');

app.get("/books", async (req, res) => {
    const data = await ReadFile(DB);
    res.json(data);
})


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})