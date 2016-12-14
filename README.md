LRU Node Cache
=========

A small library that contains most recently used data and discard the least used data. it is modified version of lru in which it releases the k no of keys (least used) on the basis of time stamp only when no of cache key reach to maximum limit of keys (n). it makes use of max heap to release k no of keys.

## Why you should select this one

	1.	Time complexcity to retrieve data is O(1).
	2.	Time complexcity to set data on cache is O(1).
			when no of cache keys reach to maximum limit of keys (n)
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

## Working example

	suppose you have created var lncObj = new LNC(6, 3);

		here n = 6, k = 3

	and your data is 
		(1, 3, 2, 7, 8, 9, 4, 7, 0, 7, 5, 6, 2) which need to be stored  


		1	3	2	7	8	9	4	7	0	7	5	6	2
		=================================================
		1	1	1	1	1	1	7	8	8	8	8	0	0
			3	3	3	3	3	8	9	9	9	9	7	7
				2	2	2	2	9	4	4	4	4	5	5
					7	7	7	4	7	7	0	0	6	2
						8	8			0	7	7
							9					5

  