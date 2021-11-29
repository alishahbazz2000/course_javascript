//*) static property in oop

//==============================================================================
//*) static
/*
    *) They are only quantified once
    *) Cannot be quantified inside constructor
    *) It has the same value for all instance
    *) class Math , console , ...
    *) When you static a method, you can no longer use this
    *) instance Made of clothing does not have access to methods, and class proprety, which is static shaped, does not access and  give error
    *) We cannot use the keyword this inside method static

    class  Human{
        firstname;
        lastname;
        static age = 20
        constructor(firstname , lastname){
            this.firstname = firstname
            this.lastname = lastname
        }
        get_info(){
            return `my name is ${firstname} and my lastname is ${lastname} and my age is ${Human.age}`
        }
        static say_hello(){
            console.log("welcome to my website")
        }
    }

    let perosn = new Human("ali","shahbaz")

    console.log(Human.propery(inheritance object))
    console.log(Human.say_hello())
    console.log(person.say_hello())  -->(return) Error
    console.log(Human.age)              -->(return)  20
    Human.age = 56
    console.log(Human.age)              -->(return)  56
    console.log(person.get_info())
*/
//==============================================================================
