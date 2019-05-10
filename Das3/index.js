let express = require("express");
let app = express();

app.get("/", function(req, res){
    res.send("<h1>Hello world</h1>");
});

app.get("/:name", function(req, res){
    let name = req.params.name;
    res.send("<h1>Hello " + name +"</h1>");
});

app.listen(3000, function(){
    console.log("Example is running on port 3000");
 });
let Triangle = require("./module");
let myTriangleObject = new Triangle(5);

function main() {
   console.log(myTriangleObject.getArea());
}
main();



// let Square = require("./module");
// let mySquareObject = new Square(5);

// function main() {
//    console.log(mySquareObject.getArea());
// }
// main();
// module.exports = class Square {
//     constructor(side) {
//         this.side = side;
//     }		
//     getArea() {
//         return this.side * this.side;
//     }
// };


//var fs = require('fs');

// function main(){
//    var file  = "hello.txt";
//    fs.appendFileSync(file, "Hello world\n");
// }
// main();

