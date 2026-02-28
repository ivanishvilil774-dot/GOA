const express = require("express");
const readFile = require("../utils/readFile");
const writeFile = require("../utils/writeFile");
const path = require("path");

const router = express.Router();
const dbPath = "data/db.json";

router.get("/", async (req, res) => {
    try {
        const items = await readFile(dbPath);
        res.status(200).json(items);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

/* =========================
   GET ITEM BY ID
========================= */
router.get("/:id", async (req, res) => {
    try {
        const items = await readFile(dbPath);
        const item = items.find((i) => i.id === req.params.id);

        if (!item) {
            return res.status(404).json({ message: "Item not found" });
        }

        res.status(200).json(item);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

/* =========================
   CREATE NEW ITEM
========================= */
router.post("/", async (req, res) => {
    try {
        const { name, price } = req.body;

        // Validation
        if (!name || price == null) {
            return res.status(400).json({
                message: "Name and price are required",
            });
        }

        const items = await readFile(dbPath);

        const newItem = {
            id: Date.now().toString(), // unique id
            name,
            price,
        };

        items.push(newItem);
        await writeFile(dbPath, items);

        res.status(201).json(newItem);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

/* =========================
   UPDATE ITEM
========================= */
router.put("/:id", async (req, res) => {
    try {
        const items = await readFile(dbPath);
        const index = items.findIndex((i) => i.id === req.params.id);

        if (index === -1) {
            return res.status(404).json({ message: "Item not found" });
        }

        const updatedItem = {
            ...items[index],
            ...req.body,
            id: items[index].id, // prevent id overwrite
        };

        items[index] = updatedItem;

        await writeFile(dbPath, items);

        res.status(200).json(updatedItem);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

/* =========================
   DELETE ITEM
========================= */
router.delete("/:id", async (req, res) => {
    try {
        const items = await readFile(dbPath);
        const filteredItems = items.filter(
            (i) => i.id !== req.params.id
        );

        if (filteredItems.length === items.length) {
            return res.status(404).json({ message: "Item not found" });
        }

        await writeFile(dbPath, filteredItems);

        res.status(200).json({ message: "Item deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;