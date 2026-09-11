const express = require("express");

const app = express();

app.use("/user", (req, res) => {
    res.send('scrum');
});

app.get("/user", (req, res) => {
    res.send({ name: 'gnanam', role: 'developer' });
});

app.use("/test", (req, res) => {
    res.send("New test Page");
});

app.use("/hello/2", (req, res) => {
    res.send("New hello Page");
});

app.use("/hello", (req, res) => {
    res.send("New hello Page");
});

app.use("/", (req, res) => {
    res.send("New Web Page");
});

app.listen(7777, () => {
    console.log("Server active now");
});