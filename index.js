var DoublyLinkListOperation = require('./lib/DoublyLinkList.js');
function LRU(maxNoOfFrames) {
	maxNoOfFrames = typeof maxNoOfFrames == "string" ? parseInt(maxNoOfFrames) : maxNoOfFrames;
	var max = (maxNoOfFrames && (maxNoOfFrames < 0 ? -maxNoOfFrames : maxNoOfFrames)) || 100;
	var count = 0;
	var cacheObj = {};
	var DLLO = new DoublyLinkListOperation();
	this.get = function(key) {
		return cacheObj[key] && cacheObj[key].data;
	}
	this.set = function(key, data) {
		if (cacheObj[key]) {
			cacheObj[key].data = data;
			DLLO.adjustNode(cacheObj[key]);
		}
		else {
			cacheObj[key] = {data: data, cacheKey: key};
			DLLO.enqueue(cacheObj[key]);
			if (count >= max) {
				var deletedKey = DLLO.dequeue();
				delete cacheObj[deletedKey];
				return deletedKey;
			} else {
				count += 1;
			}
		}
	}
	this.getAllKeys = function() {
		return Object.keys(cacheObj);
	}
	this.deleteOneKey = function(key) {
		if (!cacheObj[key])
			return;
		DLLO.deleteOneKey(cacheObj[key]);
		delete cacheObj[key];
		count -= 1;
	}
	this.deleteAllKeys = function () {
		cacheObj = {};
		DLLO.deleteAllKeys();
		count = 0;
		return "sucess";
	}
}
module.exports = {LRU: LRU};
/*function lruNodeCatch(numberOfFrames, deleteNoOfFrames) {
	var cacheObj = {};
	var count = 0;
	var me = this;
	this.set = function(key, value) {
		if (!cacheObj[key])
			count += 1;
		cacheObj[key] = {value: value, ts: new Date().getTime()};
		//cacheObj[key] = {value: value, ts: parseInt(10 + Math.random()*100)};
		if (count > numberOfFrames) {
			count -= deleteNoOfFrames;
			me.deleteKeys();
		}
	}
	this.get = function(key) {
		cacheObj[key].ts = new Date().getTime();
		//cacheObj[key].ts =  parseInt(10 + Math.random()*100);
		return cacheObj[key].value;
	}
	this.deleteKeys = function () {
		debugger;
		var cacheArr = [];
		for (var key in cacheObj) {
			cacheArr.push({ts: cacheObj[key].ts, cachedKey: key});
		}
		var indexToHeapify = (deleteNoOfFrames - 1) / 2;
		while (indexToHeapify >= 0) {
			me.maxHeapify(indexToHeapify, deleteNoOfFrames, cacheArr);
			indexToHeapify -= 1;
		}
		for (var i = deleteNoOfFrames; i < cacheArr.length; i += 1) {
			if (cacheArr[i].ts < cacheArr[0].ts) {
				cacheArr[0] = cacheArr[i];
				me.maxHeapify(0, deleteNoOfFrames, cacheArr);
			}
		}
		for (var i = 0; i < deleteNoOfFrames; i += 1)
			delete cacheObj[cacheArr[i].cachedKey];
	}
	this.maxHeapify = function (index, end, cacheArr) {
		var left = 2*index + 1, right = 2*index + 2, largest = index;
		if (left < end && cacheArr[left].ts > cacheArr[largest].ts)
			largest = left;
		if (right < end && cacheArr[right].ts > cacheArr[largest].ts)
			largest = right;
		if (index != largest) {
			var back = cacheArr[index];
			cacheArr[index] = cacheArr[largest];
			cacheArr[largest] = back;
			me.maxHeapify(largest, end, cacheArr);
		}
	}
}*/
