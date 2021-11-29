//*)  constructor in oop

//==============================================================================
//*) define constructor 
/*
    *) It is called when the class wants to be created
    *) The value in parentheses is opened and closed
    *) Variables are called inside this sound except static property

    ------ define ----------------------------------------------------------

    class Person {
        firstname;
        lastname;
        age;
        constructor(firstname , lastname , age){
            this.firstname = firstname
            this.lastname = lastname
            this.age = age
        }
        get_info(){
            return `my name is ${this.firstname} and my lastname is ${lastname} and my age is ${age}`
        }
    }
    ----- or
    class Person {
        constructor(firstname , lastname , age){
            this.firstname = firstname
            this.lastname = lastname
            this.age = age
        }
        get_info(){
            return `my name is ${this.firstname} and my lastname is ${lastname} and my age is ${age}`
        }
    }

    ------ use ----------------------------------------------------------
    let person = new Person("ali","shahbaz",33)
    console.log(person.get_info())
*/
//==============================================================================
