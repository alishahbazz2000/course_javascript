//*) array in js

//==============================================================================
//*) Don’t compare arrays with ==
/*
    *) Arrays in JavaScript, unlike some other programming languages, shouldn’t be compared with operator ==.
    *) if we compare arrays with ==, they are never the same, unless we compare two variables that reference exactly the same array.

    console.log( [] == [] )      --->(return)  false
    console.log( [0] == [0] )  --->(return)  false
    console.log( 0 == [] )      --->(return)  false
    console.log('0' == [] )    --->(return)  false
    console.log( 0 == '' )      --->(return) true, as '' becomes converted to number 0
    console.log('0' == '' )     --->(return)  false, no type conversion, different strings

*/
//==============================================================================
