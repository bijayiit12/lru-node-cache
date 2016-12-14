LRU Node Cache
=========

A library that contains most recently used data and discard the least used data. it is modified version of lru in which it releases the k no of keys (least used) on the basis of time stamp only when no of cache key reach to maximum limit of keys (n). it makes use of max heap to release k no of keys.

## Why you should select this one

	1.	Time complexcity to retrieve data is O(1).
	2.	Time complexcity to set data on cache is O(1).
			when no of cache keys reach to maximum no of keys
				then Time Complexcity to set data will be ==> k + (n - k) * logk
				where k = no of cache keys you want to release
				  	  n = maximum no of keys you want to keep in cache.

## Installation

  npm install lru-node-cache



## Usage

    var LNC = require('lru-node-cache');

    var lncObj = new LNC(100, 30);  // where n = 100, k = 30

    lncObj.set("your key", "your data");

    lncObj.get("your key");

  Output should be "your data"