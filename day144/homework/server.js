const http = require("http")

const port = 3000

const books = [
    {
        "id": 1,
        "name": "The Pragmatic Programmer",
        "price": 39.99
    },
    {
        "id": 2,
        "name": "Clean Code",
        "price": 34.50
    },
    {
        "id": 3,
        "name": "You Don't Know JS",
        "price": 29.99
    },
    {
        "id": 4,
        "name": "Atomic Habits",
        "price": 19.99
    },
    {
        "id": 5,
        "name": "The Hobbit",
        "price": 14.99
    },
    {
        "id": 6,
        "name": "Harry Potter and the Sorcerer's Stone",
        "price": 24.99
    },
    {
        "id": 7,
        "name": "Rich Dad Poor Dad",
        "price": 17.50
    },
    {
        "id": 8,
        "name": "The Alchemist",
        "price": 12.99
    }
]


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


const server = http.createServer((req, res) => {
    switch(req.method) {
        case "GET":
            return res.end(JSON.stringify(books));

        case "POST":
            return readInfo(req, (newBook) => {
                if (!newBook) return res.end("Invalid data");

                const selectedBook = books.find(book => book.id === newBook.id);
                if (selectedBook) return res.end("There is already in the list");

                books.push(newBook);
                return res.end(JSON.stringify(books));
            });

        case "PUT":
            return readInfo(req, (updateBook) => {

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

                return res.end(JSON.stringify(books));
            });
        case "DELETE":
            case "DELETE":
                return readInfo(req, (deletedBook) => {

                    if (!deletedBook || !deletedBook.id) {
                        return res.end("ID is required");
                    }

                    const index = books.findIndex(book => book.id === deletedBook.id);

                    if (index === -1) {
                        return res.end("Book with this ID does NOT exist");
                    }

                    books.splice(index, 1);

                    return res.end(JSON.stringify(books));
                });

    }
})

server.listen(port, () => console.log(`server is running on port ${port}`))


