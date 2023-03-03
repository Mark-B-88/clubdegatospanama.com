const express = require("express");
const app = express();
const { port } = require("./config/db");

app.get("/api/v1/test", (req, res) => {
    res.status(200).json({
        user: {
            name: "John Doe",
            email: "john_doe@gmail.com",
            age: 35,
            address: {
                street: "123 Main St",
                city: "New York",
                state: "NY",
                zipCode: "10001"
            },
            message: "Hello World!"
        }
    });
});

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));