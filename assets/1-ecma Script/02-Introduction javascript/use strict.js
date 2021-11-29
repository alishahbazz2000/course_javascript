//*) "use strict" in code javascript

//==============================================================================
//*) 
/*
    *) New features were added to the language while old functionality didn’t change.
    *) This was the case until 2009 when ECMAScript 5 (ES5) appeared. 
    *) It added new features to the language and modified some of the existing ones. 
    *) To keep the old code working, most such modifications are off by default. 
    *) You need to explicitly enable them with a special directive: "use strict".
    *) The directive looks like a string: "use strict" or 'use strict'. 
    *) When it is located at the top of a script, the whole script works the “modern” way.
    *) There’s no way to cancel use strict
    *) There is no directive like "no use strict" that reverts the engine to old behavior.
    *) Once we enter strict mode, there’s no going back.

    *) The task of the strict mode is to display silent errors.
    *) Silent error is an error that the compiler overrides to prevent the program from stopping. If we code with strict mode, we will have better and faster codes than non-strict mode.
    *) In a JavaScript program, you can have both strict and non-strict code at the same time.
*/
//==============================================================================
//*) So now it's time to look at what use strict is sensitive to.
/*
    1) Value the undefined variable
    "use strict";
	x = 4; // ReferenceError: assignment to undeclared variable x

    2) Change readonly values
    **) Strictly speaking, readonly or just readable values such as NaN and undefined cannot be set:
    "use strict";
	NaN = 8; // TypeError: "NaN" is read-only

    **) We also get an error to change the readonly properties:

    "use strict";
	let person = {};
	Object.defineProperty(person, "name", {
	    value: "Jack",
	    writable: false
	});
	person.name = "John"; // TypeError: "name" is read-only

    **) We also get an error to change the getter-only properties:

    "use strict";
	let person = {
	    get name() {
	        return "Jack";
	    }
	}
	person.name = "John"; // TypeError: setting getter-only property "name"

    3)  Delete with keyword delete

    "use strict";
	var x = 429;
	delete x; // SyntaxError: applying the 'delete'
	/ operator to an unqualified name is deprecated
    ---or
    delete Object.prototype;

    4) Duplicate parameters of a function
    "use strict";
	function foo(x, x) {
	  
	} / SyntaxError: duplicate formal argument x

    5) Octal numbers

    console.log(010); // 8
	console.log(019 > 021); // true

    ------- and 

    "use strict";
	let x = 010; // SyntaxError: "0"-prefixed octal literals and
	            * octal escape sequences are deprecated;
	            * for octal literals use the "0o" prefix instead
    
    6) Define a variable in the eval function

    7) Changes in the behavior of this functions

    function liskov() {
	    return this;
	}
	console.log(liskov()) ---->(return) window
    -------and -----
    "use strict";
	function liskov() {
	    return this;
	}
	console.log(liskov()) ---->(return) undefined
*/
//==============================================================================
/*
    not "use strict"

    name = 20
    console.log(name) --->(retunr) 20

*/