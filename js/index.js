var app = require("./app.js");
var $ = require("jquery");
// require("!style-loader!css-loader!../css/style.css");
require("../css/style.css");
console.log(app.add(1,3));


var ul = document.getElementsByClassName("nav")[0];

$("ul").on("click","li",function(e){
    var click = document.getElementById("bc-checked");
    if(click){
        click.setAttribute("id",null);
    }
    var li = e.target;
    li.setAttribute("id","bc-checked");
})