var cache = require('./index.js');
var lnc = new cache.LRU(4);
var arr =[2,3,1,2,1,5,0,1,3,8,9,1,4,2,1,8,1,0,0];
for (var i = 0; i < arr.length; i += 1) {
	debugger;
	var ran = Math.round(10*Math.random());
	lnc.set(arr[i], ran);
}
/*for (var i = 0; i < max; i += 1) {
	debugger;
	var val = lncObj1.get(i);
	console.log("val ==> " + val);
}*/