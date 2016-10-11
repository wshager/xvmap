var xvmap = require("../lib/xvmap");
var xvseq = require("xvseq");

let map = xvmap.map({
	"a":{"x":1},
	"b":2
});
console.log(xvmap.map(map,{"a":{"x":2}}).toJS());
