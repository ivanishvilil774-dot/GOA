const http = require("http")
const {readFile}  = require("../homework/Utlis/readFille")
const {writeFile}  = require("../homework/Utlis/writeFille")


const port = 3000

const BOOKS = "../homework/books.json"

const readInfo = (req, callback) => {
    let body = "";

    req.on("data", chunk => {
        body += chunk.toString();
    });

    req.on("end", () => {

        if (!body) {
            return callback(null);
        }

        callback(JSON.parse(body));
    });
};


const server = http.createServer( async (req, res) => {

    const books = await readFile(BOOKS)

    switch(req.method) {
        case "GET":
            return res.end(JSON.stringify(books));

        case "POST":
            return readInfo(req, async (newBook) => {
                if (!newBook) return res.end("Invalid data");

                const selectedBook = books.find(book => book.id === newBook.id);
                if (selectedBook) return res.end("There is already in the list");

                books.push(newBook);

                await writeFile(BOOKS, books)

                return res.end(JSON.stringify(books));
            });

        case "PUT":
            return readInfo(req, async (updateBook) => {

                if (!updateBook || !updateBook.id) {
                    return res.end("Invalid data. ID is required.");
                }

                const selectedBook = books.find(book => book.id === updateBook.id);

                if (!selectedBook) {
                    return res.end("Book with this ID does not exist.");
                }

                // Check if at least one field is different
                const isNameDifferent = updateBook.name && updateBook.name !== selectedBook.name;
                const isPriceDifferent = updateBook.price && updateBook.price !== selectedBook.price;

                if (!isNameDifferent && !isPriceDifferent) {
                    return res.end("No changes detected. Provide a new name or price.");
                }

                // Update fields only if provided
                if (isNameDifferent) {
                    selectedBook.name = updateBook.name;
                }

                if (isPriceDifferent) {
                    selectedBook.price = updateBook.price;
                }

                await writeFile(BOOKS, books)

                return res.end(JSON.stringify(books));
            });
        case "DELETE":
            case "DELETE":
                return readInfo(req, async (deletedBook) => {

                    if (!deletedBook || !deletedBook.id) {
                        return res.end("ID is required");
                    }

                    const index = books.findIndex(book => book.id === deletedBook.id);

                    if (index === -1) {
                        return res.end("Book with this ID does NOT exist");
                    }

                    books.splice(index, 1);

                    await writeFile(BOOKS, books)

                    return res.end(JSON.stringify(books));
                });
    }
})

server.listen(port, () => console.log(`server is running on port ${port}`))


