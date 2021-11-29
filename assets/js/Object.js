//*)  Object in javascript

//==============================================================================
/*
    *) They are very similar to an object or a instance
    *) in the form of key:value
    *) The key can be any word except __proto__

    *) syntax 

    1))) let info = {
        firstName:"ali",
        lastName:"shshbaz",
        age:20,
        if:false
    }

    2)))let info  = new Object()

    console.log(info)
    console.log(typeof info) --->(return) object
        --------------------
    *) There are two ways to access its values
    1) name_object .(dot) name_property

    console.log(info.firstName)
    console.log(info.lastName)
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

*/
//==============================================================================



























