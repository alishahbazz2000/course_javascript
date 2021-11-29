//*) Inheritance in javascript

//==============================================================================
//* inheritance
/*
    *) All classes inherit from a class called Object class
    *) The extends keyword is used
    *) super()
    *) override method

    class Human{
        firstname;
        lastname;
        constructor(firstname , lastname){
            this.firstname = firstname
            this.lastname = lastname
        }
        get_info(){
            return this.firstname + this.lastname
        }
    }

    class Employee extends Human{
        degree;
        constructor(firstname , lastname, degree){
            super(firstname , lastname)
            this.degree = degree
        }
        get_info(){
            return this.firstname + this.lastname + this.degree
        }
    }

    let person_one = new Employee("ali","shahbaz",200)
    console.log(person_one.firstname)   ---->(return) "ali"
    console.log(get_info())                     ---->(return) "alishahbaz200"
*/
//==============================================================================
