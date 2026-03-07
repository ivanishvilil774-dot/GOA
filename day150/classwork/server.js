const express = require('express');
const app = express();

app.use("/isWorking", (req, res, next) => {
    const query = req.query;
    const path = req.path;
    console.log(query, path);
    res.status(200).json([query, path]);
    next();
})

app.listen(3000, () => {
    console.log("Server is running on port 3000");
})