//*) bigInt in javascript

//==============================================================================
//*) info bigint
/*
    *) BigInt is a special numeric type that provides support for integers of arbitrary length.
    *) A bigint is created by appending n to the end of an integer literal or by calling the function BigInt that creates bigints from strings, numbers etc.

    *) syntax
    const name_varible = value+n(end value place n)
    or
    const name_varible = BigInt('value')

    const bigint = 1234567890123456789012345678901234567890n
    const bigint = BigInt("1234567890123456789012345678901234567890")
    const bigintFromNumber = BigInt(10) --->(return) same as 10n

*/
//==============================================================================
//*) Math operators
/*
    *) BigInt can mostly be used like a regular number, for example:
    console.log(1n + 2n)   --->(return) 3
    console.log(5n / 2n)   --->(return) 2

    *) All operations on bigints return bigints. 
    *) We cannot mix bigint and regular numbers:
    console.log(1n + 2) --->(return) Error: Cannot mix BigInt and other types
*/
//==============================================================================
//*) convert 
/*
    *) We should explicitly convert them if needed: using either BigInt() or Number(), like this:

    let bigint = 1n;
    let number = 2;
    *---> number to bigint
    console.log(bigint + BigInt(number)) --->(return) 3

    *---> bigint to number
    console.log(Number(bigint) + number) --->(return) 3

*/
//==============================================================================
/*
    *) The conversion operations are always silent, never give errors, but if the bigint is too huge and won’t fit the number type, then extra bits will be cut off, so we should be careful doing such conversion.
    *) The unary plus is not supported on bigints
    *) The unary plus operator +value is a well-known way to convert value to a number.
    *) In order to avoid confusion, it’s not supported on bigints:

    let bigint = 1n;
    console.log( +bigint )  --->(return) error

*/
//==============================================================================
//*) Comparisons
/*
    *) Comparisons, such as <, > work with bigints and numbers just fine:
    console.log( 2n > 1n )  --->(return)  true
    console.log( 2n > 1 )    --->(return) true

    *) Please note though, as numbers and bigints belong to different types, they can be equal ==, but not strictly equal ===

    console.log( 1 == 1n )      --->(return) true
    console.log( 1 === 1n )     --->(return) false
*/
//==============================================================================
//*) if in bigint
/*
    *) bigint 0n is falsy, other values are truthy:

    if (0n) {
        ---> never executes
    }
*/
//==============================================================================
//*) ||, &&
/*
    console.log( 1n || 2 )  ---->(return)  1 (1n is considered truthy)
    console.log( 0n || 2 )  ---->(return)  2 (0n is considered falsy)
*/
//==============================================================================


