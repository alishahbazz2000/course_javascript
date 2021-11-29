//* datatype undefined 


//==============================================================================
//*) undefined varible
/*
    *) A variable that has not been assigned a value is of type undefined. 
    *) A method or statement also returns undefined if the variable that is being evaluated does not have an assigned value. 
    *) A function returns undefined if a value was not returned.

    *) syntax
    let name_one;
    console.log(name_one)   ---->(return) undefined

    let name_two = undefined
    console.log(name_two)   ---->(return) undefined

    let x;
    if (typeof x === 'undefined') {
     --> these statements execute
    }


    *) While it is possible to use it as an identifier (variable name) in any scope other than the global scope (because undefined is not a reserved word), doing so is a very bad idea that will make your code difficult to maintain and debug.

    -->  DON'T DO THIS
    -->  logs "foo string"
    (function() {
    var undefined = 'foo';
    console.log(undefined, typeof undefined);
    })();

    -->  logs "foo string"
    (function(undefined) {
    console.log(undefined, typeof undefined);
    })('foo');

*/
//==============================================================================
//*)  ?? (check undefined)
/*
    *) If the first value is not undefined, it prints the firstvalue and ignore second value  
    *) If the first value is undefined, it prints the second 
    
    let firstName = undefined
    console.log(firstName ?? "empty")    --->(return)  "test"
    console.log(lastName ?? "empty")    --->(return)  "empty"

*/
//==============================================================================
