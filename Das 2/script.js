// let obj = {
//     "first_name": "Adrine",
//     "last_name": "Saghatelyan",
//     "age": 15,
//     "tumo_student": true,
//     sayHello(){
//         console.log("this.first_name");
//     }
   
// }
// console.log(obj);
// console.log(obj.first_name);
// obj.sayHello();

// // class Student {
// //     constructor() {
// //         this.first_name = "Adrine";
// //         this.last_name = "Saghatelyan";
// //         this.age = 15;
// //         this.tumo_student = true;
// //     }
// // }



var express = require("express");
var app = express();

app.get("/", function(req, res){
   res.send("<h1>Hello world</h1>");
});
app.get("/name/:name", function(req, res){
   var name = req.params.name;
   res.send("<h1>Hello " + name +"</h1>");
});
app.listen(3001, function(){
   console.log("Example is running on port 3000");
});
