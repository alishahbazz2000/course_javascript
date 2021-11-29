//*) spread operator in javascript

//==============================================================================
//*) sprad (in array)
/*
    *) Spread syntax (...) allows an iterable such as an array expression or string to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected, or an object expression to be expanded in places where zero or more key-value pairs (for object literals) are expected.


    *) The … spread operator is useful for many different routine tasks in JavaScript, including the following:

    1) Copying an array
    2) Concatenating or combining arrays
    3) Using Math functions
    4) Using an array as arguments
    5) Adding an item to a list
    6) Adding to state in React
    7) Combining objects
    8) Converting NodeList to an array
*/
//==============================================================================
//*) sprad (in object)
/*
    *) Spread syntax can be used when all elements from an object or array need to be included in a list of some kind. 


    function sum(x, y, z) {
        return x + y + z;
    }

    const numbers = [1, 2, 3];

    console.log(sum(...numbers))--->(return) expected output: 6

*/
//==============================================================================
