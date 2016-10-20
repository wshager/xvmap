var xvmap = require("../lib/xvmap");
var xvarray = require("xvarray");

var seq = require("xvseq").seq;

let map = xvmap.map({
	"a":{"x":1},
	"b":2
});
//console.log(xvmap.map(map,map,map).first().toJSON());
console.log(xvmap.map(seq(xvmap.entry("a",1),xvmap.entry("b",1),xvmap.entry("c",1))));
