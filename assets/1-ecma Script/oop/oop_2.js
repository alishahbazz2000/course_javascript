//*) object oriented programming in es6

//==============================================================================
//*) define class
/*
    *) naem class --> pascalcase (Person  , PersonClass)
    *) start --> class

    *) syntax 
    class name_class{
        code
    }
    *) use or instance
    let instance_one = new name_class()
    console.log(instance_one)
    console.log(typeof instance_one) --> object


    --------- example
    class Human{
        firstname;
        lastname;
        info(){
            console.log(`my name is ${firstname} and my lastname is ${lastname}`)
        }
    }
    let person = new Human()
    person.firstname  = "ali"
    person.lastname = "shahbaz"
    console.log(person.firstname)  ---> "ali"
    person.info() --> "my name is ali and my lastname is shahbaz"

*/