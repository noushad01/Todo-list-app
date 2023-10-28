import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine','ejs');
app.use(express.static("public"))

var newItems = [];


app.get("/",(req,res) => {
    res.render("index.ejs",{newListItem : newItems});
});

app.get("/today",(req,res) => {
    res.render("index.ejs",{newListItem : newItems});
});


app.post("/",(req,res) => {
 var newItem = req.body["newItem"];
  newItems.push(newItem);
  res.redirect("/");
});

app.listen(port,() => {
    console.log(`your server is running on the port ${port}`);
});

