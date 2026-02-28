const express = require("express");
const itemsRouter = require("./routers/items.router");

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// Mount Router
app.use("/api/items", itemsRouter);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});