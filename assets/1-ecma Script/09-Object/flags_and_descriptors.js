//*) flags and descriptors

//==============================================================================
//*) 
/*
    *) As we know, objects can store properties.
    *) Until now, a property was a simple “key-value” pair to us. 
    *) But an object property is actually a more flexible and powerful thing.

    *) Object properties, besides a value, have three special attributes (so-called “flags”):
    1) writable – if true, the value can be changed, otherwise it’s read-only.
    2) enumerable – if true, then listed in loops, otherwise not listed.
    3) configurable – if true, the property can be deleted and these attributes can be modified, otherwise not.
*/
//==============================================================================
//*) Object.getOwnPropertyDescriptor
/*
    *) The method Object.getOwnPropertyDescriptor allows to query the full information about a property.

    *) The syntax is:
    let descriptor = Object.getOwnPropertyDescriptor(obj, propertyName);

    obj                     ---->     The object to get information from.
    propertyName    --->      The name of the property.
    console.log(descriptor)  --> The returned value is a so-called “property descriptor” object: it contains the value and all the flags.

    let user = {
        name: "John"
    };
    let data = Object.getOwnPropertyDescriptor(user, 'name');
    console.log(data)
    ----->example
    [object Object] {
        configurable: true,
        enumerable: true,
        value: "John",
        writable: true
    }

    *) value -->  The value associated with the property (data descriptors only)
    console.log(data.value) --->(return) "John"

    *) writable -->     true if and only if the value associated with the property may be changed (data descriptors only).
    console.log(data.writable) --->(return) 

    *) enumerable --> true if and only if this property shows up during enumeration of the properties on the corresponding object.
    console.log(data.enumerable) --->(return) 

    *) configurable -->  true if and only if the type of this property descriptor may be changed and if the property may be deleted from the corresponding object.
    console.log(data.configurable) --->(return) 

    *) set

    *) get

*/
//==============================================================================
//*) Object.defineProperty
/*
    *) To change the flags, we can use Object.defineProperty.
    *) syntax
    Object.defineProperty(obj, propertyName, descriptor)
    obj                     ---->     The object to get information from.
    propertyName    --->      The name of the property.
    descriptor          ---->     Property descriptor object to apply.

    *) If the property exists, defineProperty updates its flags. 
    *) Otherwise, it creates the property with the given value and flags; in that case, if a flag is not supplied, it is assumed false.

    let user = {};
    Object.defineProperty(user, "name", {
        value: "John"
    });
    let descriptor = Object.getOwnPropertyDescriptor(user, 'name');
    console.log(user)
    ----> example

    [object Object] {
        configurable: false,
        enumerable: false,
        value: "John",
        writable: false
    }

    *) Compare it with “normally created” user.name above: now all flags are falsy. 
    *) If that’s not what we want then we’d better set them to true in descriptor.
*/
//==============================================================================
//*) Non-writable
/*
    *) Let’s make user.name non-writable (can’t be reassigned) by changing writable flag:

    let user = {
    name: "John"
    };
    Object.defineProperty(user, "name", {
        writable: false
    });

    user.name = "Pete" -->(return) Error: Cannot assign to read only property 'name'

    *) Now no one can change the name of our user, unless they apply their own defineProperty to override ours.
    *) Errors appear only in strict mode

    ----> example
    let user = { };
    Object.defineProperty(user, "name", {
        value: "John",
        -->for new properties we need to explicitly list what's true
        enumerable: true,
        configurable: true
    });
    conosle.log(user.name) --->(return) John
    user.name = "Pete"      --->(return) Error

*/
//==============================================================================
//*) 
/*
    *) The non-configurable flag (configurable:false) is sometimes preset for built-in objects and properties.
    *) A non-configurable property can not be deleted.
    *) For instance, Math.PI is non-writable, non-enumerable and non-configurable:
    *) Can’t change configurable flag.
    *) Can’t change enumerable flag.
    *) Can’t change writable: false to true (the other way round works).
    *) Can’t change get/set for an accessor property (but can assign them if absent).
    *) The idea of “configurable: false” is to prevent changes of property flags and its deletion, while allowing to change its value.


    let user = {
        name: "John"
    };
    Object.defineProperty(user, "name", {
        configurable: false
    });
    user.name = "Pete"  --->(return) works fine
    delete user.name     --->(return) Error

    -------- example

    let user = {
        name: "John"
    };
    Object.defineProperty(user, "name", {
        writable: false,
        configurable: false
    });
    ----> won't be able to change user.name or its flags
    ----> all this won't work:
    user.name = "Pete";
    delete user.name;
    Object.defineProperty(user, "name", { value: "Pete" });
*/
//==============================================================================
//*) Object.defineProperties
/*
    *) There’s a method Object.defineProperties(obj, descriptors) that allows to define many properties at once.
    *) Give several features at once and all together 
    *) syntax
    Object.defineProperties(obj, {
        prop1: descriptor1,
        prop2: descriptor2
        ...
    });

    ------ example
    Object.defineProperties(user, {
        name: { value: "John", writable: false },
        surname: { value: "Smith", writable: false },
        ...
    });
*/
//==============================================================================
//*) Object.getOwnPropertyDescriptors
/*
    *) To get all property descriptors at once, we can use the method Object.getOwnPropertyDescriptors(obj).
    *) syntax
    let clone = Object.defineProperties({}, Object.getOwnPropertyDescriptors(obj));
*/
//==============================================================================