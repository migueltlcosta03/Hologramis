import express from "express";
import bodyParser from "body-parser";

// Server Configuration
const app = express();
const port = process.env.PORT || 1812;

// Middlewares
app.use(express.static("public"));

// Routes
app.get("/", (req, res) => {
    res.render("index.ejs");
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})