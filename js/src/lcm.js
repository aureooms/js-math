

var __lcm__ = function ( gcd ) {

	return function ( a, b ) {
		return a / gcd( a, b ) * b;
	};
};

exports.__lcm__ = __lcm__;
