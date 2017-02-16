
var string;

string = require( "@aureooms/js-string" );

test( "all", function () {

	var gcd, lcm, zfill;

	gcd = math.gcd;

	lcm = math.__lcm__( gcd );


	deepEqual(gcd(2*3*5*7*13, 2*2*2*5*7*11*13*17), 2*5*7*13, 'gcd value');
	deepEqual(lcm(2*3*5*7*13, 2*2*2*5*7*11*13*17), 3 * 2*2*11*17 * 2*5*7*13, 'lcm value');


	deepEqual(gcd(7168718631, 261736816281), gcd(261736816281, 7168718631), 'gcd order');
	deepEqual(lcm(7168718631, 261736816281), lcm(261736816281, 7168718631), 'lcm order');

	deepEqual(math.le(0, 1), 0 <=  1, 'le');
	deepEqual(math.lt(0, 1), 0 <   1, 'lt');
	deepEqual(math.ge(0, 1), 0 >=  1, 'ge');
	deepEqual(math.gt(0, 1), 0 >   1, 'gt');
	deepEqual(math.eq(0, 1), 0 === 1, 'eq');
	deepEqual(math.ne(0, 1), 0 !== 1, 'ne');

	deepEqual(math.le(0, 0), 0 <=  0, 'le');
	deepEqual(math.lt(0, 0), 0 <   0, 'lt');
	deepEqual(math.ge(0, 0), 0 >=  0, 'ge');
	deepEqual(math.gt(0, 0), 0 >   0, 'gt');
	deepEqual(math.eq(0, 0), 0 === 0, 'eq');
	deepEqual(math.ne(0, 0), 0 !== 0, 'ne');

	zfill = math.__zfill__( 8, string.__lfill__, string.mul );
	deepEqual(   zfill(""), "00000000", "00000000" );
	deepEqual(  zfill("7"), "00000007", "00000007" );
	deepEqual( zfill("74"), "00000074", "00000074" );




});
