const morgan = require('morgan');
const express = require('express');
const app = express();

const PORT = 4000


app.use(morgan('dev'))

app.use((req, res, next) => {
    console.log(`${req.method} ${req.url} ${req.statusCode} ${req.responseTime}ms`);
    next();
}); 

app.get("/", (req, res) => {
    res.send("Hello, World!");
})

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
});