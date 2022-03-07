const express = require("express");
const app = express();
const fs = require("fs");

app.use(express.static("public"));

const navbar = fs.readFileSync("./public/templates/navbar.html");
const footer = fs.readFileSync("./public/templates/footer.html");

const frontpage = fs.readFileSync("./public/pages/frontpage.html");
const frontpageFinal = navbar + frontpage + footer;

const tools = fs.readFileSync("./public/pages/tools.html");
const toolsFinal = navbar + tools + footer;

const javascript = fs.readFileSync("./public/pages/javascript.html");
const javascriptFinal = navbar + javascript + footer;

const nodejs = fs.readFileSync("./public/pages/nodejs.html");
const nodejsFinal = navbar + nodejs + footer;

const expressPage = fs.readFileSync("./public/pages/express.html");
const expressPageFinal = navbar + expressPage + footer;

const links = fs.readFileSync("./public/pages/links.html");
const linksFinal = navbar + links + footer;

app.get("/", (req, res) => {
    res.send(frontpageFinal);
});

app.get("/tools", (req, res) => {
    res.send(toolsFinal);
});

app.get("/javascript", (req, res) => {
    res.send(javascriptFinal);
});

app.get("/nodejs", (req, res) => {
    res.send(nodejsFinal);
});

app.get("/express", (req, res) => {
    res.send(expressPageFinal);
});

app.get("/links", (req, res) => {
    res.send(linksFinal);
});






const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log("App running on port: ", PORT)
});