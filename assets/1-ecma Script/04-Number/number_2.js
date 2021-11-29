//*) method number

//==============================================================================
//*  1) MAX_SAFE_INTEGER
/*
    *) constant represents the maximum safe integer in JavaScript (253 - 1).
    *) Range of int
    *) For larger integers, consider using BigInt.

    *) syntax
    Number.MAX_SAFE_INTEGER

    console.log(Number.MAX_SAFE_INTEGER)  -->(return) 9007199254740991
    console.log(Math.pow(2,53) - 1)                 -->(return) 9007199254740991
*/
//==============================================================================
//*  2) Number.MIN_SAFE_INTEGER
/*
    *) constant represents the minimum safe integer in JavaScript (-(253 - 1)).
    *) To represent integers smaller than this, consider using BigInt.

    *) syntax
    Number.MIN_SAFE_INTEGER

    console.log(Number.MIN_SAFE_INTEGER)  -->(return) -9007199254740991
*/
//==============================================================================
//*  3) MAX_VALUE
/*
    *) The Number.MAX_VALUE property represents the maximum numeric value representable in JavaScript.
    *) Values larger than MAX_VALUE are represented as Infinity (positive).

    console.log(Number.MAX_VALUE) -->(return) 1.7976931348623157e+308
*/
//==============================================================================
//*  4)  MIN_VALUE
/*
    *) property represents the smallest positive numeric value representable in JavaScript.
    *)The MIN_VALUE property is the number closest to 0, not the most negative number, that JavaScript can represent.

    console.log(Number.MIN_VALUE)   -->(return)  5e-324
*/
//==============================================================================
//*  5)  toString() or toString(n)
/*
    let number = 5
    console.log(number.toString())  -->(return)  "5"

    console.log(number.toString(2))  -->(return) "101" binary
    console.log(number.toString(3))  -->(return) "12" 

*/
//==============================================================================
//*  6) Number.NEGATIVE_INFINITY
/*
    *) property represents the negstive Infinity value.
    *) use check
*/
//==============================================================================
//*  7)  Number.POSITIVE_INFINITY
/*
    *) property represents the positive Infinity value.
    *) use check
*/
//==============================================================================