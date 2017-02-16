( function ( ) {

'use strict' ;

var definition = function ( exports , undefined ) {


/* js/src/compare */
/* js/src/compare/eq.js */

var eq = function ( a, b ) {
	return a === b;
};

exports.eq = eq;

/* js/src/compare/ge.js */

var ge = function ( a, b ) {
	return a >= b;
};

exports.ge = ge;

/* js/src/compare/gt.js */

var gt = function ( a, b ) {
	return a > b;
};

exports.gt = gt;

/* js/src/compare/le.js */

var le = function ( a, b ) {
	return a <= b;
};

exports.le = le;

/* js/src/compare/lt.js */

var lt = function ( a, b ) {
	return a < b;
};

exports.lt = lt;

/* js/src/compare/ne.js */

var ne = function ( a, b ) {
	return a !== b;
};

exports.ne = ne;

/* js/src/gcd.js */



var gcd = function ( a, b ) {

	while ( true ) {

		if ( a === 0 ) {
			return b;
		}

		b %= a;

		if ( b === 0 ) {
			return a;
		}

		a %= b;
	}
};

exports.gcd = gcd;

/* js/src/lcm.js */


var __lcm__ = function ( gcd ) {

	return function ( a, b ) {
		return a / gcd( a, b ) * b;
	};
};

exports.__lcm__ = __lcm__;

/* js/src/zfill.js */


var __zfill__ = function ( n, __fill__, mul ) {
	return __fill__( '0', n, mul );
};

exports.__zfill__ = __zfill__;

return exports ;
} ;
if ( typeof exports === "object" ) {
	definition( exports ) ;
}
else if ( typeof define === "function" && define.amd ) {
	define( "@aureooms/js-math" , [ ] , function ( ) { return definition( { } ) ; } ) ;
}
else if ( typeof window === "object" && typeof window.document === "object" ) {
	definition( window["math"] = { } ) ;
}
else console.error( "unable to detect type of module to define for @aureooms/js-math") ;
} )( ) ;
