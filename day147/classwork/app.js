const express = require('express');
const app = express();
const port = 3000;

app.get("/item", (req, res) => {
    console.log(req.query)
    res.send(req.query)
})

app.listen(port, () =>  console.log(`server is running on port ${port}`))