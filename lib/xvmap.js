"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.merge = undefined;
exports.map = map;
exports.put = put;
exports.keys = keys;
exports.contains = contains;
exports.forEachEntry = forEachEntry;
exports.entry = entry;
exports.get = get;

var _immutable = require("immutable");

var _xvseq = require("xvseq");

function map() {
	for (var _len = arguments.length, a = Array(_len), _key = 0; _key < _len; _key++) {
		a[_key] = arguments[_key];
	}

	var l = a.length;
	var m = (0, _immutable.Map)();
	if (l === 0) {
		return (0, _xvseq.seqOf)(m);
	}
	if (l == 1 && (0, _xvseq._isSeq)(a[0])) {
		a = a[0];
		// expect a sequence of maps
		if (!a.isEmpty()) {
			return (0, _xvseq.seqOf)(a.reduce(function (pre, cur) {
				return pre.merge((0, _immutable.Map)(cur));
			}, m));
		}
		return (0, _xvseq.seqOf)(m);
	}
	return (0, _xvseq.seqOf)(a.reduce(function (pre, cur) {
		return pre.merge((0, _immutable.Map)((0, _xvseq._first)(cur)));
	}, m));
}

var merge = exports.merge = map;

function put($map, $k, $v) {
	var k = (0, _xvseq._first)($k);
	var map = (0, _xvseq._first)($map);
	return (0, _xvseq.seqOf)(map.set(k, (0, _xvseq.seqOf)($v)));
}

function keys($map) {
	return $map.first().keySeq();
}

function contains($map, $k) {
	return seq((0, _xvseq._first)($map).has((0, _xvseq._first)($k)));
}

function forEachEntry($map, $fn) {
	var fn = (0, _xvseq._first)($fn);
	return $map.map(function (map) {
		return map.entries((0, _xvseq._wrap)(fn));
	});
}

function entry($key, $val) {
	return map($key, $val);
}

function get($map, $key) {
	var map = (0, _xvseq._first)($map);
	return (0, _xvseq.seqOf)(map.get((0, _xvseq._first)($key)));
}