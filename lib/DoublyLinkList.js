function DoublyLinkListOperation() {
	var endPtr = {head: null, end: null};
	var me = this;
	this.enqueue = function(obj) {
		if (endPtr.head) {
			endPtr.end.next = obj;
			obj.pre = endPtr.end;
			endPtr.end = obj;
		} else {
			endPtr.end = obj;
			endPtr.head = obj;
		}
	}
	this.dequeue = function () {
		var deletedkey = endPtr.head.cacheKey;
		endPtr.head = endPtr.head.next;
		endPtr.head.pre = null;
		return deletedkey;
	}
	this.adjustNode = function (obj) {
		if (!obj.next)
			return;
		obj.pre ? (obj.pre.next = obj.next) : (endPtr.head = obj.next);
		obj.next && (obj.next.pre = obj.pre);
		obj.next = null;
		me.enqueue(obj);
	}
	this.deleteOneKey = function(obj) {
		obj.pre ? (obj.pre.next = obj.next) : (endPtr.head = obj.next);
		obj.next ? (obj.next.pre = obj.pre) : (endPtr.end = obj.pre);
		obj.next = obj.pre = null;
	}
	this.deleteAllKeys = function () {
		endPtr = {};
	}
}
module.exports = DoublyLinkListOperation