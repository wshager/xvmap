import { Map } from "immutable";

import { seqOf, _first, _isSeq, _wrap } from "xvseq";

export function map(...a) {
	var l = a.length;
	var m = Map();
	if(l===0){
		return seqOf(m);
	}
	if(l==1 && _isSeq(a[0])){
		a = a[0];
		// expect a sequence of maps
		if(!a.isEmpty()) {
	        return seqOf(a.reduce((pre,cur) => pre.merge(Map(cur)),m));
	    }
	    return seqOf(m);
	}
	return seqOf(a.reduce((pre,cur) => pre.merge(Map(_first(cur))),m));
}

export const merge = map;

export function put($map,$k,$v) {
	var k = _first($k);
	var map = _first($map);
	return seqOf(map.set(k,seqOf($v)));
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

export function entry($key,$val){
	return map($key,$val);
}

export function get($map,$key) {
	var map = _first($map);
	return seqOf(map.get(_first($key)));
}
