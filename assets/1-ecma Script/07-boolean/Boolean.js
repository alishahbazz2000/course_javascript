// *) datatype boolean

//==============================================================================
//*) Boolean
/*
    *) JavaScript booleans can have one of two values: true or false.
    *) false --> 0, -0, null, false, NaN, undefined , ""
    *) true --> All except false and Amounts false
*/
//==============================================================================
//*)  this datatype has two value
/*
    1)  true  (1)
    2) false (0)
*/
//==============================================================================
//*) method boolean
/*
    *1) toString()
    -->Converts a boolean value to a string, and returns the result
    let bool = true;
    let x = bool.toString();

    *2) valueOf()
    -->  Returns the primitive value of a boolean
    let bool = false;
    let x = bool.valueOf();

*/
//==============================================================================
//*)  Booleans Can be Objects
/*
    1) Normally JavaScript booleans are primitive values created from literals:
    var x = false;

    2) But booleans can also be defined as objects with the keyword new:
    var y = new Boolean(false);


    *) Do not create Boolean objects. 
    *) It slows down execution speed.
    *) The new keyword complicates the code. This can produce some unexpected results:
*/
//==============================================================================







