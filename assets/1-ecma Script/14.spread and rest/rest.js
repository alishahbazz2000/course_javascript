//*) rest operator in javascript

//==============================================================================
//*) rest (in array) 
/*
    let numberStore = [0, 1, 2];
    let newNumber = 12;
    numberStore = [...numberStore, newNumber];

    let arr = [1, 2, 3];
    let arr2 = [...arr]; // like arr.slice()

    arr2.push(4);
    --->(return) arr2 becomes [1, 2, 3, 4]
    --->(return) arr remains unaffected

*/
//==============================================================================
//*) rest (in function)
/*
    *) The rest parameter syntax allows a function to accept an indefinite number of arguments as an array, providing a way to represent variadic functions in JavaScript.
    *) syntax
    function f(a, b, ...theArgs) {
    }

    ----- example one------------------

    function sum(...theArgs) {
        return theArgs.reduce((previous, current) => {
            return previous + current;
        });
    }
    console.log(sum(1, 2, 3));
    --> (return)expected output: 6
    console.log(sum(1, 2, 3, 4));
    --> (return) expected output: 10

    -------------------------------------------------------------
    *) Arrange the parameters in a function
    1) parameter normal
    2) default parameter
    3) rest operator ...

    function show_arrange(firstname , lastname = "shahbaz", ...info){
        ....
    }

    function foo(...wrong, arg2, arg3)  --->(error) Not true
    -------------------------------------------------------------

    *) We have only one rest operator in the function

    foo(...one, ...wrong, ...wrong)         --->(error) Not true
    -------------------------------------------------------------


 */
//==============================================================================
//*) 
/*
    *) There are three main differences between rest parameters and the arguments object:
    1) The arguments object is not a real array, while rest parameters are Array instances, meaning methods like sort, map, forEach or pop can be applied on it directly;
    2) The arguments object has additional functionality specific to itself (like the callee property).
    3) The ...restParam bundles all the extra parameters into a single array, therefore it does not contain any named argument defined before the ...restParam. 
    Whereas the arguments object contains all of the parameters -- including all of the stuff in the ...restParam -- unbundled.
*/
