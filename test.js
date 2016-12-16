var cache = require('./index.js');
var lnc = new cache.LRU(4);
var arr =[2,3,1,2,1,5,0,1,3,8,9,1,4,2,1,8,1,0,0];

var lncObj = new cache.LRU(4);  // where n = 4 size of frame (maximum no of keys you want to keep in cache at a time)

var arr = [5,2,5,2,7,8,4,2,0,5,2];
for (var i = 0; i < arr.length; i += 1) {
	if (arr[i] == 4)
		debugger;
	lncObj.set(arr[i], i);
}
debugger;
lncObj.set(98, {});
for (var i = arr.length - 1; i >= 0; i -= 1) {
	
	console.log("key => " + arr[i] + " value => " +  lncObj.get(arr[i]));
}
console.log("all key " + JSON.stringify(lncObj.get(21)));
console.log("all key " + JSON.stringify(lncObj.getAllKeys()));
console.log("delete one key " + JSON.stringify(lncObj.deleteOneKey(1)));
console.log("delete all key " + JSON.stringify(lncObj.deleteAllKeys(1)));
/*for (var i = 0; i < arr.length; i += 1) {
	debugger;
	var ran = Math.round(10*Math.random());
	lnc.set(arr[i], ran);
}*/
/*for (var i = 0; i < max; i += 1) {
	debugger;
	var val = lncObj1.get(i);
	console.log("val ==> " + val);
}*/