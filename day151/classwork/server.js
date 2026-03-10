const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const errprHandler = require("errorhandler");

app.use(bodyParser.json());


app.post("/user", (req, res) => {
    console.log(req.body);
    res.json({
        message: "Received user data successfully",
        user: req.body
    });
})

app.use(errprHandler());

// app.use((err, req, res, next) => {
//     console.error(err.status || 500);
//     res.status(500).send(err.message);
// });


app.listen(3000, () => {
    console.log('Server is running on port 3000');
});