var express = require("express");
var cors = require("cors");

var handlers = require(__dirname + "/routes/handlers.js");

const PORT = 5000;
var app = express();

app.use(cors());
app.get('/api/quote', handlers.getQuote)

app.listen(PORT, () => {
    console.log("SERVER START UP");
    console.log("LISTENING ON PORT:", PORT);
    console.log("===========================");
});