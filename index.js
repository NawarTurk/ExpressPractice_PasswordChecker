import  express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 3001;
const __dirname = dirname(fileURLToPath(import.meta.url));


app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html")
})

app.post("/check", (req, res) => {
    res.send("test")
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})