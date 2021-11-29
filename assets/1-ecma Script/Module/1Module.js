//*) Module in javascript

//==============================================================================
//*) 
/*
    *) Modulation is very important
    *) Divide a project into separate files
    *) use import and export

    *) call oll alias(as)

    import ) import * as alias_name from "namefile"
    alias_name.property
    export) export {sayHi as hi, sayBye as bye};

    📁 main.js
    import {sayHi as hi, sayBye as bye} from './say.js';

    hi('John'); // Hello, John!
    bye('John'); // Bye, John!
    
    *) Modules can load each other and use special directives export and import to interchange functionality, call functions of one module from another one:

    1) export keyword labels variables and functions that should be accessible from outside the current module.
    2) import allows the import of functionality from other modules.

    *) import Total file
    import "address file"

    *) import one part as file
    import {name_part} form "address file"

*/
//==============================================================================
//*) export file
/*
    📁 say.js
    function sayHi(user) {
        alert(`Hello, ${user}!`);
    }
    function sayBye(user) {
        alert(`Bye, ${user}!`);
    }
    export {sayHi, sayBye}; // a list of exported variables

    📁 main.js
    import {sayHi, sayBye} from './say.js';

    sayHi('John'); // Hello, John!
    sayBye('John'); // Bye, John!

*/
//==============================================================================
//*) Dynamic imports
/*
    *) First, we can’t dynamically generate any parameters of import.
    *) The module path must be a primitive string, can’t be a function call. This won’t work:
    
    import ... from getModuleName(); // Error, only from "string" is allowed

    *) Second, we can’t import conditionally or at run-time:
    if(...) {
        import ...; // Error, not allowed!
    }
    {
    i   mport ...; // Error, we can't put import in any block
    }
*/
//==============================================================================
//*) use async and await in  import/export
/*
    ------------------- import one
    let modulePath = prompt("Which module to load?");

    import(modulePath)
        .then(obj => <module object>)
        .catch(err => <loading error, e.g. if no such module>)

    ------------------- import two
    📁 say.js
    export function hi() {
        alert(`Hello`);
    }
    export function bye() {
        alert(`Bye`);
    }

    let {hi, bye} = await import('./say.js');
    hi();
    bye();
*/
//==============================================================================
//*) Export default
/*
    *)  We can specify which member is considered to be exported by default. To do this, use the default keyword after export:

    1-----------------------
    export default name = "Mathias";
	export let favorites = [ "Music", "Painting" ];
    2-------------------------
    let name = "Mathias";
	let favorites = [ "Music", "Painting" ];
	 
	export {
	    name as default,
	    favorites
	}
    3--------------------------
    📁 user.js
    export default class User { // just add "default"
        constructor(name) {
        this.name = name;
        }
    }
    *) Just enter the default keyword after the export word.
    *) And to import this module, we write its name without.. 
    📁 main.js
    import User from './user.js'; // not {User}, just User
    new User('John');
*/