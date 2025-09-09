const express = require("express");
const cors = require("cors");
const app = express();


app.use(cors()); // allow requests from React frontend
app.use(express.json());


app.get("/", (req,res) => {
    res.json({message: "Home page"});
})
app.post("/login", (req,res) => {
    res.json({ user: "login page"});
})


app.listen("5000", () => {
    console.log("listening to port");
})