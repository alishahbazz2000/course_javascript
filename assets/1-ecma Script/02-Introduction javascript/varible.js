// * varible in javascript
//==============================================================================
//*) How to define a variable name
/*
    1) camel case    --->   varibleName
    2) pascal base   --->    VaribleName
    3) underscore   --->   varible_name

*/
//==============================================================================
//*)  Scope varible
/*
    1) Global Scope
    2) Local Scope (Block Scope)
    3) function Scope

    *) Conversion localScope to the globalScope

*/
//==============================================================================
//*)   method typeof
/*
    typeof(name varible) or typeof name_varible---> Defines the type of variable

    let name = "ali"
    console.log(typeof(name)) ---->(result) string
*/
//==============================================================================
//*) define varible
/* 
    1) var (old define and not Use)
    2) let (mutable)
    3) const (immutable) 
*/
//==============================================================================
//*)  Rules of variable definition
/*
    1)  start name varible with $
    2) not name varible with (@ ^ # % , ...)
    3) not start name varible with number
    4) use underline for Special modes more private in class(oop)

*/
//==============================================================================
//*) syntax var to defined varible and Difficulties var
/* 
    var =>  var name_varible = Give value

    var name = "ali"
    name = 20 (that's okey)
*/
//==============================================================================
//*) syntax let to defined varible
/* 
    let =>  let name_varible = Give value

    let name = "ali"
    name = 20 (that's oky)
*/
//==============================================================================
//*) syntax const to defined varible
/* 
    const =>  const name_varible = Give value

    const name = "ali"
    name = 20 (this' error the name is immutable)
*/
//==============================================================================
//*) var   vs   (let and const)
/*
    * 1) “var” has no block scope
        *) Variables, declared with var, are either function-scoped or global-scoped. 
        *) They are visible through blocks.
        *) max access  one block
    ----------------- example one -----------------------
    if (true) {
        var test = true; // use "var" instead of "let"
    }

    console.log(test) --->(return) true, the variable lives after if
    ----------------- example two -----------------------
    function sayHi() {
        if (true) {
            var phrase = "Hello";
        }

        alert(phrase); // works
    }
    sayHi();
    alert(phrase); // ReferenceError: phrase is not defined

    * 2) “var” tolerates redeclarations
        *) If we declare the same variable with let twice in the same scope, that’s an error:

    let user;
    let user; // SyntaxError: 'user' has already been declared
        *) With var, we can redeclare a variable any number of times. 
        *) If we use var with an already-declared variable, it’s just ignored:

    var user = "Pete";
    var user = "John"; // this "var" does nothing (already declared)
    *--> ...it doesn't trigger an error
    alert(user); // John

    * 3) “var” variables can be declared below their use

    --->(1)
    function sayHi() {
        phrase = "Hello";
        alert(phrase);
        var phrase;
    }
    sayHi();

    --->(2)
    function sayHi() {
        var phrase;
        phrase = "Hello";
        alert(phrase);
    }
    sayHi();

    --->(3)
    function sayHi() {
    phrase = "Hello"; // (*)
        if (false) {
            var phrase;
        }
        alert(phrase);
    }
    sayHi();


*/
//==============================================================================
//*) datatype
/* 
        1) primitive type -->  string , number , boolean , undefined  , symbol
        2) complex(reference) type -->  function  , object  , array , null , class
*/
//==============================================================================
//*)  datatype in javascript
/* 
    1)  string          ---->(return) primitive type
    2)  number          ---->(return) primitive type
    3)  boolean         ---->(return) primitive type
    4)  undefined       ---->(return) primitive type
    5)  null            ---->(return) primitive type
    6)  symbol          ---->(return) primitive type
    7)  bigint          ---->(return) primitive type
    8)  object          ---->(return) complex type
    9)  class           ---->(return) complex type
    10) array           ---->(return) complex type
    11) function        ---->(return) complex type
*/
//==============================================================================
/*
    *) A variable name should have a clean, obvious meaning, describing the data that it stores.
    *) Variable naming is one of the most important and complex skills in programming. 
    *) A quick glance at variable names can reveal which code was written by a beginner versus an experienced developer.

    *) Variable naming
    *) There are two limitations on variable names in JavaScript:
    1) The name must contain only letters, digits, or the symbols $ and _.
    2) The first character must not be a digit.
*/
//==============================================================================
//*) varible constants
/*
    *) Such constants are named using capital letters and underscores.
    const COLOR_RED = "#F00";
    const COLOR_GREEN = "#0F0";
    const COLOR_BLUE = "#00F";
    const COLOR_ORANGE = "#FF7F00";
*/
//==============================================================================
//* Declaring twice triggers an error
/*
    *) A variable should be declared only once.
    *) A repeated declaration of the same variable is an error:

    let message = "This";
    *)repeated 'let' leads to an error
    let message = "That"; // SyntaxError: 'message' has already been declared
 */
//==============================================================================
//*) Reference Type
/*
    
*/
//==============================================================================
//*) Pass By Value (primitives) and Pass By Reference 
/*
    *) example Pass By Value (primitives)
    let name_one = "John";
    let name_two = name1;

    console.log(name_one)   --->(return)  John
    console.log(name_two);  --->(return)  John

    name_one = "Paolo";
    console.log(name_one)  --->(return)  Paolo
    console.log(name_two)  --->(return)  John

    console.log( name_one == name_two)  --->(return)  true
    console.log( name_one === name_two)  --->(return)  ture

    *) example Pass By Reference 
    
    let house1 = {
        color: 'green'
    }
    let house2 = house1;

    console.log(house1.color)  --->(return) green
    console.log(house2.color)  --->(return)  green

    house1.color = "yellow"

    console.log(house1.color)  --->(return)  yellow
    console.log(house2.color)  --->(return)  yellow

    console.log( name_one == name_two)   --->(return)  true
    console.log( name_one === name_two)  --->(return)  ture
*/
//==============================================================================


