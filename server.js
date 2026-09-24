const express = require("express");

const app = express();

const PORT = 3000;

app.use(express.static("public"));

app.get("/api/status", (req, res) => {
    res.json({
        status: "Running",
        message: "Node.js application is running inside Docker!",
        container: "Docker Container",
        time: new Date().toLocaleString()
    });
});

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
});