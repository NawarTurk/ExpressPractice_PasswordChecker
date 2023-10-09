import  express, { response } from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";

const app = express();
const port = 3001;
const __dirname = dirname(fileURLToPath(import.meta.url));
const password = "ILoveCoding!"
let isCorrectPassword = false;

app.use(bodyParser.urlencoded({ extended: true }));

function passwordChecker(req, res, next) {
    if (req.body.password === password) isCorrectPassword = true;
    next();
}

app.use(passwordChecker)

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html")
})

app.post("/check", (req, res) => {
    if (isCorrectPassword) {
        res.sendFile(__dirname + '/public/coding-tips.html')
        isCorrectPassword = false;
    } else {
        res.redirect("/");
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})