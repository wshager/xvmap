import { Map } from "immutable";

import { seq, _first, _isSeq, _wrap } from "xvseq";

import { error } from "xverr";

export function _isMap($maybe){
	let maybe = _first($maybe);
	return !!(maybe && Map.isMap(maybe));
}

export function _map(a){
	var l = a.length;
	var m = Map();
	if(l===0){
		return m;
	}
	if(l==1 && _isSeq(a[0])){
		a = a[0];
		// expect a sequence of maps
		if(!a.isEmpty()) {
			return a.reduce((pre,cur) => {
				cur = _first(cur);
				return pre.merge(Map.isMap(cur) ? cur : Map(cur));
			},m);
	    }
	    return m;
	}
	return a.reduce((pre,cur) => {
		cur = _first(cur);
		return pre.merge(Map.isMap(cur) ? cur : Map(cur));
	},m);
}

export function map(...a) {
	return seq(_map(a));
}

export const merge = map;

export function put($map,$k,$v) {
	var k = _first($k);
	var map = _first($map);
	return seq(map.set(k,seq($v)));
}

export function keys($map) {
	return $map.first().keySeq();
}

export function contains($map,$k){
	return seq(_first($map).has(_first($k)));
}

export function forEachEntry($map,$fn){
	let fn = _first($fn);
	return $map.map(function(map){
		return map.entries(_wrap(fn));
	});
}

export function entry(...a){
	// TODO template errors
	if(a.length!=2) return error("err:XPST0017","Number of arguments of function map.entry doesn't match function signature (expected 2, got "+a.length+")");
	var m  = Map();
	return seq(m.set(_first(a[0]),seq(a[1])));
}

export function get($map,$key) {
	var map = _first($map);
	return seq(map.get(_first($key)));
}

export { Map };
