const http = require("http");
const querystring = require("querystring");

const port = 3000;

const server = http.createServer((req, res) => {
    const url = new URL(req.url, "http://localhost:3000");

    const pathname = url.pathname;

    const query = url.search.slice(1);
    const queryParams = querystring.parse(query);

    console.log(
        `Pathname: ${pathname}\n\n` +
        `Query parameters:\n` +
        JSON.stringify(queryParams)
    );

    res.end("hello world")
});

server.listen(port, () => {
    console.log(`server is running on port ${port}`);
});
