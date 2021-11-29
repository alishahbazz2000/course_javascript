//*) symbol in javascript

//==============================================================================
/*
    *) primitive value
    *) used as object property identifiers
    *) Built-in and creatable by developers
    *) uniqueness in guaranteed
    *) A Symbol value represents a unique identifier.
    *) You can pass a parameter to Symbol(), and that is used as the symbol description, useful just for debugging purposes:

    const uid = Symbol()
    console.log(uid) -->(return ) Symbol()
    console.log(typeof uid)   ---> "symbol"

    const uid = Symbol("uid")
    console.log(uid) -->(return ) Symbol()

    console.log(Symbol('uid') === Symbol('uid'))  -->(return) false

    const uid = Symbol("uid")
    const user = {
        [uid] : 'p1',
        name : "ali",
        age : 30
    }
    console.log(user[Symbol('uid')]) --->(return) undefined
    console.log(user)
    user[uid] = "p3"
    console.log(user)
*/
//==============================================================================
/*
    Symbol() == Symbol()      --->(return) false
    Symbol() === Symbol()    --->(return) false
*/
//==============================================================================
//*) method symbol
/*

*/
//==============================================================================
