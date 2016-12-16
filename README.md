LRU Node Cache
=========

A small library that is independent of other node-module and node version that provide a fastest way to retrieve and set up data on cache. Doubly link list and hashmap has been used here so that all operation can be performed in O(1) (Time complexcity). it remove the least recently used cached key when the cache is full and a new cache key is referenced which is not there in cache.

## Why you should select this one

	1.	Time complexcity to retrieve data is O(1).
	2.	Time complexcity to set data on cache is O(1).
	3.	Time complexcity to delete cached data is O(1).
	4.	it is independent of other node-module and node version	

## Installation

  npm install lru-node-cache



## Usage

    var cache = require('lru-node-cache');

    var lncObj = new cache.LRU(4);  // where n = 4 size of frame (maximum no of keys you want to keep in cache at a time)

    lncObj.set("your key", "your data");

    lncObj.get("your key");

Output should be "your data"

## Methods

* `set` Used to set data on cache. example ==> lncObj.set("your key", "your data"). Time Complexcity => O(1)`.
* `get` Used to ge data on cache. example ==> lncObj.get("your key"). Time Complexcity => O(1)`.
* `getAllKeys` Used to retrieve all keys on cache. example ==> lncObj.getAllKeys(). `.
* `deleteOneKey` Used to delete only one key from cache. example ==> lncObj.deleteOneKey("your key"). Time Complexcity => O(1)`.
* `deleteAllKeys` Used to delete all keys from cache. example ==> lncObj.deleteAllKeys(). Time Complexcity => O(1)`.

## Working example

	suppose you have created var lncObj = new cache.LRU(4)

		here n = 4

	and your data is 
		(1, 3, 2, 7, 8, 9, 4, 7, 0, 7, 5, 6, 2) which need to be cached  


		1	3	2	7	8	9	4	7	0	7	5	5	0
		=================================================
		1	1	1	1	3	2	7	8	9	9	4	4	4
			3	3	3	2	7	8	9	4	4	0	0	7
				2	2	7	8	9	4	7	0	7	7	5
					7	8	9	4	7	0	7	5	5	0
														
												

  