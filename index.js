const express = require('express');
const app = express();
var router = express.Router();
var path = __dirname + '/views/';

router.use(function (req, res, next) {
    console.log("/" + req.method);
    next();
});
app.set('port', (process.env.PORT || 5000));
router.get("/", function (req, res) {
    res.sendFile(path + "index.html");
});

router.get("/about", function (req, res) {
    res.sendFile(path + "about.html");
});

router.get("/contact", function (req, res) {
    res.sendFile(path + "contact.html");
});

app.use("/", router);

app.use("*", function (req, res) {
    res.sendFile(path + "404.html");
});

app.listen(app.get("port"), function () {
    console.log('example app listening');
});