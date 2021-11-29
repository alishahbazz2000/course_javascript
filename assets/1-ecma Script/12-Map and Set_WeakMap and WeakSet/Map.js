//*) Map in javascript

//==============================================================================
//*) introduction map
/*
    *) Store key-value data of any kind and length, any key values are allowed
    *) Iterable, also some special map methods available
    *) Order is guaranteed, duplicate keys are NOT allowed, key-based access
*/
//==============================================================================
//*) map vs object
/*
    *) map
    1)  Can use ANY values (and types) as  keys          
    2) Better performance for large quantities of data
    3) Better performance when adding + removing data frequently

    *) object
    1) Only may use strings, numbers or symbols as keys
    2) Perfect for small/ medium-sized sets of data
    3) Easier/ quicker to create (typically also with better performance)
*/
//==============================================================================
//*) syntax map
/*
    *) syntax
    let map_name = new Map([["key" , "some value"]])
*/
//==============================================================================
//*) objects as keys in map
/*
    *) Using objects as keys is one of the most notable and important Map features. 
    *) The same does not count for Object. 
    *) String as a key in Object is fine, but we can’t use another Object as a key in Object.

    let john = { name: "John" };
    let ben = { name: "Ben" };

    let visitsCountObj = {}; 
    *---> try to use an object
    visitsCountObj[ben] = 234; 
    *---> try to use ben object as the key
    visitsCountObj[john] = 123; 
    *---> try to use john object as the key, ben object will get replaced

    --->That's what got written!
    console.log( visitsCountObj["[object Object]"] )  ---->(return) 123

*/

//==============================================================================
//*  Does not work in Map (dot  .) and [] to access values
/*
    let recipeMap = new Map([
        ['cucumber', 500],
        ['tomatoes', 350],
        ['onion',    50]
    ]);
    console.log(recipeMap.cucumber) -->(return undefined)
    console.log(recipeMap[cucumber]) -->(return undefined)
    console.log(recipeMap["cucumber"]) -->(return undefined)

    *) It can only reach Map values by the following two method
    let recipeMap = new Map([
        ['cucumber', 500],
        ['tomatoes', 350],
        ['onion',    50]
    ]);
    recipeMap.get("cucumber")
*/
//==============================================================================
//*) How Map compares keys
/*
    *) To test keys for equivalence, Map uses the algorithm SameValueZero.
    *) It is roughly the same as strict equality ===, but the difference is that NaN is considered equal to NaN. 
    *) So NaN can be used as the key as well.

    *) This algorithm can’t be changed or customized.
*/
//==============================================================================
//*) foreach in map
/*

    let recipeMap = new Map([
        ['cucumber', 500],
        ['tomatoes', 350],
        ['onion',    50]
    ]);
    recipeMap.forEach( (value, key, map) => {
    alert(`${key}: ${value}`); // cucumber: 500 etc
    });

*/
//==============================================================================
//*)
/*
    *) When a Map is created, we can pass an array (or another iterable) with key/value pairs for initialization

    ---> array of [key, value] pairs
    let map = new Map([
        ['1',  'str1'],
        [1,    'num1'],
        [true, 'bool1']
    ]);
    console.log( map.get('1')) --->(return) str1

*/
//==============================================================================
//*) Conversion object to map
/*
    *) If we have a plain object, and we’d like to create a Map from it, then we can use built-in method Object.entries(obj) that returns an array of key/value pairs for an object exactly in that format.

    let obj = {
        name: "John",
        age: 30
    };
    let map = new Map(Object.entries(obj));
    console.log ( map.get('name') ) --->(return) John

*/
//==============================================================================
//*) Object.fromEntries: Object from Map
/*
    let map = new Map();
    map.set('banana', 1);
    map.set('orange', 2);
    map.set('meat', 4);

    let obj = Object.fromEntries(map.entries()); // make a plain object (*)
    --->(return) obj = { banana: 1, orange: 2, meat: 4 }
    console.log(obj.orange) -->(return) 2
*/