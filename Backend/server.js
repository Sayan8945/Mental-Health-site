import express from "express"
import cors from "cors"
const app = express();


app.use(cors()); // allow requests from React frontend
app.use(express.json());
app.listen("8080", (req,res) => {
    console.log("listening to port");
})

app.get("/", (req,res) => {
    res.json({message: "Home page"});
})
app.get("/login", (req,res) => {
    res.json({ message: "login page"});
})