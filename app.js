//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
let items = ["Buy Food", "Cook Food", "Eat Food"];

//Setup bodyParser: Must be setup before req.body.newItem can be used below.
app.use(bodyParser.urlencoded({extended: true}));
//Tell Express where to find the styles for the application:
app.use(express.static("public"));

app.set("view engine", "ejs");

app.get("/", function(req, res){
    let today = new Date();
    let options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };

    let day = today.toLocaleDateString("en-US", options);
    //The entire items array is passed in here:
    res.render("list", {kindOfDay: day, newListItems: items});
});

app.post("/", function(req, res){
    //Each time we get a new post request, a new item is created below:
    item = req.body.newItem;
    items.push(item);
    res.redirect("/");
});

app.listen(3000, function(){
    console.log("Server started on port 3000");
});