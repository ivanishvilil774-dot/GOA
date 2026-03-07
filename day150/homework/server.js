const morgan = require('morgan');
const express = require('express');
const app = express();

const PORT = 3000

app.use(morgan('dev'))

let requestCount = 0;

app.use((req, res, next) => {
    requestCount++;
    console.log(requestCount);
    next();
});

app.get("/", (req, res) => {
    res.send("Hello, World!");
})


app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
}); 
