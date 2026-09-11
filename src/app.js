const express = require("express");

const app = express();
app.use("/", (req, res) => {
    res.send("New Web Page");
});

app.use("/test", (req, res) => {
    res.send("New test Page");
});

app.use("/hello", (req, res) => {
    res.send("New hello Page");
});

app.listen(7777, () => {
    console.log("Server active now");
});