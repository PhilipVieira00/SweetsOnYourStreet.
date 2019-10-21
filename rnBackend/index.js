const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const {mongoose} = require("./db/db");

const userController = require("./controllers/userController");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.use("/user", userController);


app.listen(3333, () => {
    console.log("Server is running on port 3333");
});