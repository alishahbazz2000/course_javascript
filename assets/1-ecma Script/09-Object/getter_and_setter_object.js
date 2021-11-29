//*) getter and setter in object javascript

//==============================================================================
//*) info object properties
/*
    *) There are two kinds of object properties.
    1) The first kind is data properties. 
    We already know how to work with them. 
    All properties that we’ve been using until now were data properties.

    2) The second type of properties is something new. 
    It’s accessor properties. 
    They are essentially functions that execute on getting and setting a value, but look like regular properties to an external code.
    Accessor properties are represented by “getter” and “setter” methods. 
*/
//==============================================================================
//*) Getters and setters
/*
    *) Accessor properties are represented by “getter” and “setter” methods. 
    *) syntax
    let obj = {
        get propName() {
            *-->  getter, the code executed on getting obj.propName
        },      
        set propName(value) {
            *--> setter, the code executed on setting obj.propName = value
        }
    };

    ------------------ example --------------------------------
    let user = {
        name: "John",
        surname: "Smith",

        get fullName() {
            return `${this.name} ${this.surname}`;
        }
    };

    *) access Accessor property get --> Without parantess ()
    console.log(user.fullName) --->(return) John Smith

    *) From the outside, an accessor property looks like a regular one. 
    *) That’s the idea of accessor properties. 
    *) We don’t call user.fullName as a function, we read it normally: the getter runs behind the scenes.
    *) Cannot set get

    let user = {
        get fullName() {
            return `...`;
        }
    };
    user.fullName = "Test" --->(return) Error (property has only a getter)


    ----------------------------- full example -------------------------
    let user = {
        name: "John",
        surname: "Smith",

        get fullName() {
            return `${this.name} ${this.surname}`;
        },

        set fullName(value) {
            [this.name, this.surname] = value.split(" ");
        }
    };

    * --> set fullName is executed with the given value.
    user.fullName = "Alice Cooper";

    console.log(user.name) --->(return) Alice
    console.log(user.surname) --->(return)  Cooper





*/
//==============================================================================
//*) fullName (set , get) with defineProperty
/*
    *) Descriptors for accessor properties are different from those for data properties.

    *) For accessor properties, there is no value or writable, but instead there are get and set functions.

    *) That is, an accessor descriptor may have:

    1) get – a function without arguments, that works when a property is read,
    2) set – a function with one argument, that is called when the property is set,
    3) enumerable – same as for data properties,
    4) configurable – same as for data properties.
    

    let user = {
        name: "John",
        surname: "Smith"
    };

    Object.defineProperty(user, 'fullName', {
        get() {
            return `${this.name} ${this.surname}`;
        },

        set(value) {
            [this.name, this.surname] = value.split(" ");
        }
    });
    console.log(user.fullName) --->(return) John Smith
    for(let key in user) alert(key); // name, surname


    *) If we try to supply both get and value in the same descriptor, there will be an error:
    *---> Error: Invalid property descriptor.
    Object.defineProperty({}, 'prop', {
        get() {
            return 1
        },

        value: 2
    });
*/
//==============================================================================
//*) Smarter getters/setters
/*
    *) Getters/setters can be used as wrappers over “real” property values to gain more control over operations with them.
    *) For instance, if we want to forbid too short names for user, we can have a setter name and keep the value in a separate property _name:

    let user = {
        get name() {
            return this._name;
        },

        set name(value) {
            if (value.length < 4) {
            alert("Name is too short, need at least 4 characters");
            return;
            }
            this._name = value;
        }
    };

    user.name = "Pete";
    console.log(user.name) --->(return) Pete

    user.name = "" --->(return) Name is too short...

    *) Technically, external code is able to access the name directly by using user._name. 
    *) But there is a widely known convention that properties starting with an underscore "_" are internal and should not be touched from outside the object.
*/
//==============================================================================
//*) Using for compatibility
/*
    function User(name, age) {
        this.name = name;
        this.age = age;
    }
    let john = new User("John", 25);
    console.log( john.age ) --->(return) 25
*/
//==============================================================================
