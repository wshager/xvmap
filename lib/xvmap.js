"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Map = exports.merge = undefined;
exports._isMap = _isMap;
exports._map = _map;
exports.map = map;
exports.put = put;
exports.keys = keys;
exports.contains = contains;
exports.forEachEntry = forEachEntry;
exports.entry = entry;
exports.get = get;

var _immutable = require("immutable");

var _xvseq = require("xvseq");

var _xverr = require("xverr");

function _isMap($maybe) {
	var maybe = (0, _xvseq._first)($maybe);
	return !!(maybe && _immutable.Map.isMap(maybe));
}

function _map(a) {
	var l = a.length;
	var m = (0, _immutable.Map)();
	if (l === 0) {
		return m;
	}
	if (l == 1 && (0, _xvseq._isSeq)(a[0])) {
		a = a[0];
		// expect a sequence of maps
		if (!a.isEmpty()) {
			return a.reduce(function (pre, cur) {
				cur = (0, _xvseq._first)(cur);
				return pre.merge(_immutable.Map.isMap(cur) ? cur : (0, _immutable.Map)(cur));
			}, m);
		}
		return m;
	}
	return a.reduce(function (pre, cur) {
		cur = (0, _xvseq._first)(cur);
		return pre.merge(_immutable.Map.isMap(cur) ? cur : (0, _immutable.Map)(cur));
	}, m);
}

function map() {
	for (var _len = arguments.length, a = Array(_len), _key = 0; _key < _len; _key++) {
		a[_key] = arguments[_key];
	}

	return (0, _xvseq.seq)(_map(a));
}

var merge = exports.merge = map;

function put($map, $k, $v) {
	var k = (0, _xvseq._first)($k);
	var map = (0, _xvseq._first)($map);
	return (0, _xvseq.seq)(map.set(k, (0, _xvseq.seq)($v)));
}

function keys($map) {
	return $map.first().keySeq();
}

function contains($map, $k) {
	return (0, _xvseq.seq)((0, _xvseq._first)($map).has((0, _xvseq._first)($k)));
}

function forEachEntry($map, $fn) {
	var fn = (0, _xvseq._first)($fn);
	return $map.map(function (map) {
		return map.entries((0, _xvseq._wrap)(fn));
	});
}

function entry() {
	// TODO template errors
	if (arguments.length != 2) return (0, _xverr.error)("err:XPST0017", "Number of arguments of function map.entry doesn't match function signature (expected 2, got " + arguments.length + ")");
	var m = (0, _immutable.Map)();
	return (0, _xvseq.seq)(m.set((0, _xvseq._first)(arguments.length <= 0 ? undefined : arguments[0]), (0, _xvseq.seq)(arguments.length <= 1 ? undefined : arguments[1])));
}

function get($map, $key) {
	var map = (0, _xvseq._first)($map);
	return (0, _xvseq.seq)(map.get((0, _xvseq._first)($key)));
}

exports.Map = _immutable.Map;