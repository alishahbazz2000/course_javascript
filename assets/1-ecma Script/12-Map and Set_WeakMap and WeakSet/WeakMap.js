//*)  WeakMap in javascript

//==============================================================================
//*) weakMap
/*
    *) The first difference between Map and WeakMap is that keys must be objects, not primitive values:

    let weakMap = new WeakMap();
    let obj = {};
    weakMap.set(obj, "ok"); // works fine (object key)
    ---> can't use a string as the key
    weakMap.set("test", "Whoops"); // Error, because "test" is not an object


    let john = { name: "John" };
    let weakMap = new WeakMap();
    weakMap.set(john, "...");
    john = null;  --->(return) overwrite the reference
    --->(return) john is removed from memory!

    *) WeakMap does not support iteration and methods keys(), values(),         entries() 
    *) so there’s no way to get all keys or values from it.

    *) The JavaScript engine decides that. 
    *) It may choose to perform the memory cleanup immediately or to wait and do the cleaning later when more deletions happen. 
    *) So, technically, the current element count of a WeakMap is not known.
    *) The engine may have cleaned it up or not, or did it partially. 
    *) For that reason, methods that access all keys/values are not supported.
    *) The main area of application for WeakMap is an additional data storage.
    *) We put the data to a WeakMap, using the object as the key, and when the object is garbage collected, that data will automatically disappear as well.
    --->(for example) we have code that keeps a visit count for users. 
*/
//==============================================================================
//*) weakMap.get(key)
/*

*/
//==============================================================================
//*) weakMap.set(key, value)
/*

*/
//==============================================================================
//*) weakMap.delete(key)
/*

*/
//==============================================================================
//*) weakMap.has(key)
/*

*/
//==============================================================================