//*) Map method in javascript

//==============================================================================
//*) 1) map.set(key, value)
/*
    *)  stores the value by the key.

    let map = new Map();
    map.set('1', 'str1');   // a string key
    map.set(1, 'num1');     // a numeric key
    map.set(true, 'bool1'); // a boolean key
    console.log(map)

    *) Chaining
    *) Every map.set call returns the map itself, so we can “chain” the calls:
    map.set('1', 'str1')
        .set(1, 'num1')
        .set(true, 'bool1');
    console.log(map)
*/
//==============================================================================
//*) 2) map.get(key)
/*
    *) returns the value by the key, undefined if key doesn’t exist in map.

    console.log( map.get(1)) --->(return) 'num1'
    console.log( map.get('1'))--->(return) 'str1'
    console.log( map.size)--->(return) 3
*/
//==============================================================================
//*) 3) map.has(key)
/*
    *) returns true if the key exists, false otherwise.
*/
//==============================================================================
//*) 4) map.delete(key)
/*
    *) removes the value by the key.
*/
//==============================================================================
//*) 5) map.clear()
/*
    *) removes everything from the map.
*/
//==============================================================================
//*) 6)  map.size
/*
    *) returns the current element count.
*/
//==============================================================================
//*) 7) map.keys()
/*
    *) returns an iterable for keys,

    let recipeMap = new Map([
        ['cucumber', 500],
        ['tomatoes', 350],
        ['onion',    50]
    ]);
    ---> iterate over keys (vegetables)
    for (let vegetable of recipeMap.keys()) {
        console.log(vegetable)---->(return) cucumber, tomatoes, onion
    }
*/
//==============================================================================
//*) 8) map.values()
/*
    *) returns an iterable for values,

    let recipeMap = new Map([
        ['cucumber', 500],
        ['tomatoes', 350],
        ['onion',    50]
    ]);
    ---> iterate over values (amounts)
    for (let vegetable of recipeMap.values()) {
        console.log(vegetable)  ---->(return) 500, 350, 50
    }
*/
//==============================================================================
//*) 8) map.entries()
/*
    *) returns an iterable for entries [key, value], it’s used by default in for..of.

    let recipeMap = new Map([
        ['cucumber', 500],
        ['tomatoes', 350],
        ['onion',    50]
    ]);
    --> iterate over [key, value] entries
    for (let entry of recipeMap) { // the same as of recipeMap.entries()
        console.log(entry)  ---->(return) cucumber,500 (and so on)
    }
*/
//==============================================================================