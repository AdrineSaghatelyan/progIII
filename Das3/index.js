let express = require("express");
let app = express();

app.get("/", function(req, res){
    res.send("<h1>Hello world</h1>");
});

app.get("/:name", function(req, res){
    let name = req.params.name;
    res.send("<h1>Hello " + name +"</h1>");
});

app.listen(3001, function(){
    console.log("Example is running on port 3001");
 });
 