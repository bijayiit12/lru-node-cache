var lnc = require('./index.js');
var max = 20, del = 5;
var lncObj1 = new lnc(max, del);

for (var i = 0; i < max + 5; i += 1) {
	lncObj1.set(i, max + 5 - i);
}
/*for (var i = 0; i < max; i += 1) {
	debugger;
	var val = lncObj1.get(i);
	console.log("val ==> " + val);
}*/