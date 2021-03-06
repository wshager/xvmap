var xvmap = require("../lib/xvmap");
var xvarray = require("xvarray");

var seq = require("xvseq").seq;

function assertEq(a,b){
	var ajs = JSON.stringify(a.toJS ? a.toJS() : a);
	var bjs = JSON.stringify(b.toJS ? b.toJS() : b);
	assert.equal(ajs,bjs,`${ajs} not equal to ${bjs}`);
}

let map = xvmap.map({
	"a":{"x":1},
	"b":2
});
//console.log(xvmap.map(map,map,map).first().toJSON());
var m = xvmap.map(seq(xvmap.entry("a",1),xvmap.entry("b",1),xvmap.entry("c",1)));
console.log(m);
console.log(xvmap.put(m,"d",4));
console.log(xvmap.put(m,"e",seq(1,2,3)));
console.log(xvmap.keys(m));
console.log(xvmap.get(m,"b"));
