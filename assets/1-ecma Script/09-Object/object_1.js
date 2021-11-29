//*)  Object in javascript

//==============================================================================
//*)  The key has a value in the object
/*
    *) There can be no space or n between the characters because it gives an error and if the key wants a space or n it should be written as follows
    *) They should be written in the form of strings

    let info = {
        first name :'ali',
        last-name : 'shahbaz'
    }
    console.log(info)  -->(return) syntax error

    ----------------- correct code -----------------------------

    let info = {
        "first name" : "ali",
        "last-name" : "shahbaz"
    }
    console.log(info)

    *) But the more important point is that if the key is in the form of a string, it cannot be accessed in the form of dot (.), It must be accessed in the second form.

     let info = {
        "first name" : "ali",
        "last-name" : "shahbaz"
    }

    console.log(info.first name)    --->(return) error
    console.log(info."first name") --->(return) error
    console.log(info.[first name]) --->(return) error   
    
    console.log(info.["first name"]) --->(return) "ali"
*/
//==============================================================================
//==============================================================================
//*) Comparison by reference
/*
    *) Two objects are equal only if they are the same object.

    let a = {};
    let b = a;  --> copy the reference

    console.log( a == b )    --->(return) true, both variables reference the same object
    console.log( a === b )  --->(return)  true

    *) And here two independent objects are not equal, even though they look alike (both are empty):

    let a = {};
    let b = {}; // two independent objects

    console.log( a == b ) --->(return) false
*/
//==============================================================================
//*) Nested cloning object
/*
    *) Until now we assumed that all properties of user are primitive. 
    *) But properties can be references to other objects. 

    let user = {
        name: "John",
        sizes: {
            height: 182,
            width: 50
        }
    };
    console.log( user.sizes.height )  --->(return) 182

    *) copy  user.sizes is Problem (user.sizes is object)
    *) use Object.assign

*/
//==============================================================================
//*) Object.assign
/*
    *) The Object.assign() method copies all enumerable own properties from one or more source objects to a target object. 
    *) It returns the target object.

    *) Syntax
    Object.assign(target, ...sources)
    
    *) target
        The target object — what to apply the sources’ properties to, which is returned after it is modified.
    *) sources
        The source object(s) — objects containing the properties you want to apply. 

    --------------------------------example
    const obj = { a: 1 };
    const copy = Object.assign({}, obj);
    console.log(copy) --->(return) { a: 1 }

*/
//==============================================================================
//*) Const objects can be modified
/*
    const user = {
        name: "John"
    };
    user.name = "Pete";  ---> (*)
    console.log(user.name) --->(return) Pete

    *) It might seem that the line (*) would cause an error, but it does not.
    *) The value of user is constant, it must always reference the same object, but properties of that object are free to change.
    *) In other words, the const user gives an error only if we try to set user=... as a whole.

*/
//==============================================================================
/*
    *) They are very similar to an object or a instance
    *) in the form of key:value
    *) The key can be any word except __proto__

    *) syntax 

    1))) let info = {
        firstName:"ali",
        lastName:"shahbaz",
        age:20,
        if:false
    }

    2)))let info  = new Object()

    console.log(info)
    console.log(typeof info) --->(return) object
        --------------------
    *) There are two ways to access its values
    1) name_object .(dot) name_property

    console.log(info.firstName)       ---->(return) "ali"
    console.log(info.lastName)        ---->(return) "shahbaz"
    console.log(info['firstname'])   ---->(return) "ali"
    console.log(info['lastname'])    ---->(return) "shahbaz"
        --------------------
    2) name_object['name_property']

    console.log(info['firstName'])
    console.log(info['age'])
        --------------------
    *) value It can be even one function
    let info = {
        firstName:"ali",
        lastName:"shshbaz",
        age:20,
        fullName:function(){
            return this.firstName + this.lastName + this.age
        }
    }

    console.log(info.fullName())
        --------------------
    *) value It can be even one array or object
    
    let info = {
        firstName = "ali",
        lastName:"shahbaz",
        curse : ['python' , 'javascript', 'typescript'],
        infoFather:{
            fatherName: "yas",
            fatherAge: 20
        }
    }

    console.log(info.curse[2])
    console.log(info.fullName.fathreAge)
        --------------------    
    *) add key value to object

    let info = {
        firstName = "ali",
        lastName:"shahbaz",
        curse : ['python' , 'javascript', 'typescript'],
        infoFather:{
            fatherName: "yas",
            fatherAge: 20
        }
    }
    info.sex = true;
    console.log(info)

            --------------------    
    *) change value to object

    let info = {
        firstName = "ali",
        lastName:"shahbaz",
        curse : ['python' , 'javascript', 'typescript'],
        infoFather:{
            fatherName: "yas",
            fatherAge: 20
        }
    }
    info.firstname = "hamid"
    console.log(info)

            --------------------    
    *) change value to object (undefined or null)

    let info = {
        firstName = "ali",
        lastName:"shahbaz",
        curse : ['python' , 'javascript', 'typescript'],
        infoFather:{
            fatherName: "yas",
            fatherAge: 20
        }
    }

    info.firstnaem = undefined
    info.curse = null
    console.log(info)
             --------------------    
    *) remove key and value in object (delete name_onbject.key)

    let info = {
        firstName = "ali",
        lastName:"shahbaz",
        curse : ['python' , 'javascript', 'typescript'],
        infoFather:{
            fatherName: "yas",
            fatherAge: 20
        }
    }
    
    delete info.age
    console.log(info)
*/
//==============================================================================
//*) object constructor
/*
    *) Here we have to use the keyword this for both propery and method 
    let Person = function(firstname, lastname){
        this.firstname = firstname
        this.lastnae  = lastname
        this.fullname = function(){
            return this.firstname + this.lastname
        }
    }

    let human = new Person("ali","shahbaz")
    console.log(human.fullname)

    let human_one = new Person("yassin","turki")
    console.log(human.fullname)

    -------- *** -------
    let string_one = "javad"
    let string_two = new String("javad")
    console.log(typeof string_one)               ---> string
    console.log(typeof string_two)               ---> object
    console.log(string_one == string_two)    ---> (return) true
    console.log(string_one === string_two)  ---> (return) false

    -------- *** -------

    let number_one = 10
    let number_two = new Number(10)
    console.log(typeof number_one)                 ---> number
    console.log(typeof number_two)                 ---> object
    console.log(number_one == number_two)    ---> (return) true
    console.log(number_one === number_two)  ---> (return) false

    -------- *** -------

    *) The same goes for the rest of the datatypes (array , boolean  , ...)
    *) array has refrence

    let array_one = [1,2,3,4,5]
    let array_two = new Array(1,2,3,4,5)

    console.log(typeof array_one)                ---> object
    console.log(typeof array_two)                ---> object
    console.log(array_one == array_two)      ---> (return) false
    console.log(array_one === array_two)    ---> (return) false

    -------- *** -------
    *) funciton has refrence

    let function_one = function(firstname , lastname){
        return firstname + lastname
    }
    let function_two = new Function('firstname' , 'lastname' , 'return firstname + lastname' )

    console.log(function_one(4,5) == function_two(4,5))    --->(return) false
    console.log(function_one ==0= function_two)     --->(return) false

*/
//==============================================================================
//*) Object.fromEntrie
/*
    let prices = Object.fromEntries([
        ['banana', 1],
        ['orange', 2],
        ['meat', 4]
    ]);
    --->(return) now prices = { banana: 1, orange: 2, meat: 4 }

    console.log (prices.orange)--->(return)  2
*/
//==============================================================================
