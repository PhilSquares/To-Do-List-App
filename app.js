//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

//Setup bodyParser: Must be setup before req.body.newItem can be used below.
app.use(bodyParser.urlencoded({extended: true}));

app.set("view engine", "ejs");

app.get("/", function(req, res){
    let today = new Date();
    let options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };

    let day = today.toLocaleDateString("en-US", options);
    res.render("list", {kindOfDay: day});
});

app.post("/", function(req, res){
    let item = req.body.newItem;
    console.log(item);
});

app.listen(3000, function(){
    console.log("Server started on port 3000");
});