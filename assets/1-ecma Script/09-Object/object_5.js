//*) Object.keys, values, entries
//==============================================================================
//*)
/*
    *) Object.keys(obj) – returns an array of keys.
    *) Object.values(obj) – returns an array of values.
    *) Object.entries(obj) – returns an array of [key, value] pairs.


    let user = {
        name: "John",
        age: 30
    };
    Object.keys(user) = ["name", "age"]
    Object.values(user) = ["John", 30]
    Object.entries(user) = [ ["name","John"], ["age",30] ]
    *----> loop over values
    for (let value of Object.values(user)) {
        console.log(value) --->(return) John, then 30
    }

*/